"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { db } from "@/lib/database/supabase-service";
import { Button } from "@/components/ui";
import { ArrowLeft, Play, Pause, RotateCcw, ChefHat, Timer, VolumeX, Volume2 } from "lucide-react";

interface Recipe {
  id: string;
  title: string;
  description: string;
  prep_time: number;
  cook_time: number;
  difficulty: 'easy' | 'medium' | 'hard';
  servings: number;
  ingredients: Array<{
    name: string;
    amount: string;
    notes?: string;
  }>;
  steps: Array<{
    step: number;
    instruction: string;
    duration?: number;
  }>;
  mamas: {
    id: string;
    name: string;
    cuisine_type: string;
    voice_id: string;
    accent_description: string;
    color_primary: string;
    color_secondary: string;
  };
}

export default function CookingPage() {
  const params = useParams();
  const router = useRouter();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);
  const [timer, setTimer] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(true);

  useEffect(() => {
    const loadRecipe = async () => {
      if (!params.id) return;
      
      try {
        setLoading(true);
        const data = await db.getRecipeById(params.id as string);
        if (data) {
          const transformedRecipe: any = {
            ...data,
            mamas: {
              ...data.mamas,
              voice_id: (data.mamas as any).voice_id || data.mamas.name.toLowerCase().replace(/\s+/g, '-'),
              accent_description: (data.mamas as any).accent_description || 'Traditional accent'
            }
          };
          setRecipe(transformedRecipe);
        }
      } catch (error) {
        console.error('Error loading recipe:', error);
      } finally {
        setLoading(false);
      }
    };

    loadRecipe();
  }, [params.id]);

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTimerRunning && timer > 0) {
      interval = setInterval(() => {
        setTimer(prev => {
          if (prev <= 1) {
            setIsTimerRunning(false);
            // Timer finished - could trigger voice notification
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timer]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const startTimer = (duration: number) => {
    setTimer(duration * 60); // Convert minutes to seconds
    setIsTimerRunning(true);
  };

  const toggleTimer = () => {
    setIsTimerRunning(!isTimerRunning);
  };

  const resetTimer = () => {
    setTimer(0);
    setIsTimerRunning(false);
  };

  const handleStepComplete = (stepIndex: number) => {
    // setCompletedSteps(prev => new Set(prev).add(stepIndex)); // This line was removed
    if (stepIndex < (recipe?.steps.length || 0) - 1) {
      setCurrentStep(stepIndex + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const speakInstruction = async (instruction: string) => {
    if (!voiceEnabled) return;
    
    try {
      console.log(`Speaking: ${instruction}`);
      
      // Call the voice API
      const response = await fetch('/api/voice/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: instruction,
          voice_id: recipe?.mamas.voice_id || 'nonna-lucia',
          salt_pepper: true
        })
      });
      
      if (response.ok) {
        const data = await response.json();
        if (data.success && data.audio_url) {
          // Play the audio
          const audio = new Audio(data.audio_url);
          audio.play().catch(err => console.error('Audio play failed:', err));
        }
      } else {
        console.warn('Voice generation failed, falling back to text');
      }
    } catch (error) {
      console.error('Error speaking instruction:', error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-terracotta"></div>
      </div>
    );
  }

  if (!recipe) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">🔍</div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          Recipe not found
        </h3>
        <p className="text-gray-600 mb-4">
          The recipe you're looking for doesn't exist or has been removed.
        </p>
        <Button
          onClick={() => router.push('/recipes')}
          className="bg-terracotta hover:bg-terracotta/90 text-white"
        >
          Browse Recipes
        </Button>
      </div>
    );
  }

  const currentStepData = recipe.steps[currentStep];
  const progress = ((currentStep + 1) / recipe.steps.length) * 100;

  if (!currentStepData) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">⚠️</div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          Invalid step
        </h3>
        <p className="text-gray-600 mb-4">
          The current step is not available.
        </p>
        <Button
          onClick={() => setCurrentStep(0)}
          className="bg-terracotta hover:bg-terracotta/90 text-white"
        >
          Go to First Step
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Button
          variant="ghost"
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft size={20} />
          Back
        </Button>
        <Button
          variant="ghost"
          onClick={() => setVoiceEnabled(!voiceEnabled)}
          className={`flex items-center gap-2 ${voiceEnabled ? 'text-terracotta' : 'text-gray-600'}`}
        >
          {voiceEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
          Voice
        </Button>
      </div>

      {/* Recipe Info */}
      <div 
        className="rounded-lg p-4 text-white"
        style={{ backgroundColor: recipe.mamas.color_primary }}
      >
        <div className="flex items-center gap-3 mb-2">
          <ChefHat size={24} />
          <div>
            <h1 className="text-lg font-semibold">{recipe.title}</h1>
            <p className="text-sm opacity-90">with {recipe.mamas.name}</p>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="mt-4">
          <div className="flex justify-between text-sm mb-1">
            <span>Step {currentStep + 1} of {recipe.steps.length}</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-2">
            <div 
              className="bg-white h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Timer */}
      {timer > 0 && (
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Timer size={24} className="text-terracotta" />
              <div>
                <div className="text-2xl font-bold text-terracotta">
                  {formatTime(timer)}
                </div>
                <div className="text-sm text-gray-600">
                  {isTimerRunning ? 'Timer running' : 'Timer paused'}
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={toggleTimer}
                className="flex items-center gap-2"
              >
                {isTimerRunning ? <Pause size={16} /> : <Play size={16} />}
                {isTimerRunning ? 'Pause' : 'Start'}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={resetTimer}
                className="flex items-center gap-2"
              >
                <RotateCcw size={16} />
                Reset
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Current Step */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-start gap-4">
          <div 
            className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
            style={{ backgroundColor: recipe.mamas.color_primary }}
          >
            {currentStepData.step}
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-3">
              {currentStepData.instruction}
            </h2>
            
            {currentStepData.duration && (
              <div className="mb-4">
                <Button
                  onClick={() => startTimer(currentStepData.duration!)}
                  className="bg-terracotta hover:bg-terracotta/90 text-white"
                  disabled={isTimerRunning}
                >
                  <Timer size={16} className="mr-2" />
                  Start {currentStepData.duration} min timer
                </Button>
              </div>
            )}

            <div className="flex gap-3">
              <Button
                onClick={() => speakInstruction(currentStepData.instruction)}
                variant="outline"
                className="flex items-center gap-2"
                disabled={!voiceEnabled}
              >
                <Play size={16} />
                Hear {recipe.mamas.name}
              </Button>
              
              {currentStep > 0 && (
                <Button
                  onClick={handlePreviousStep}
                  variant="outline"
                >
                  Previous
                </Button>
              )}
              
              <Button
                onClick={() => handleStepComplete(currentStep)}
                className="bg-terracotta hover:bg-terracotta/90 text-white"
              >
                {currentStep === recipe.steps.length - 1 ? 'Finish Recipe' : 'Next Step'}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Step Overview */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold mb-4">All Steps</h3>
        <div className="space-y-3">
          {recipe.steps.map((step, index) => (
            <div 
              key={index}
              className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
                index === currentStep 
                  ? 'bg-terracotta/10 border-2 border-terracotta' 
                  : 'bg-gray-50 hover:bg-gray-100' // Removed completedSteps.has(index)
              }`}
              onClick={() => setCurrentStep(index)}
            >
              <div 
                className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-medium ${
                  index === currentStep
                    ? 'bg-terracotta'
                    : 'bg-gray-400'
                }`}
              >
                {step.step}
              </div>
              <div className="flex-1">
                <div className="font-medium">{step.instruction}</div>
                {step.duration && (
                  <div className="text-sm text-gray-600">
                    {step.duration} minutes
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Completion */}
      {currentStep === recipe.steps.length - 1 && ( // Removed completedSteps.has(currentStep)
        <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 text-center">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-2xl font-bold text-green-800 mb-2">
            Congratulations!
          </h2>
          <p className="text-green-700 mb-4">
            You've successfully completed {recipe.title} with {recipe.mamas.name}!
          </p>
          <div className="flex gap-3 justify-center">
            <Button
              onClick={() => router.push('/recipes')}
              className="bg-terracotta hover:bg-terracotta/90 text-white"
            >
              Browse More Recipes
            </Button>
            <Button
              onClick={() => router.push(`/mamas/${recipe.mamas.id}/cookbook`)}
              variant="outline"
            >
              View {recipe.mamas.name}'s Cookbook
            </Button>
          </div>
        </div>
      )}
    </div>
  );
} 