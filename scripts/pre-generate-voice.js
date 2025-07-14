#!/usr/bin/env node

/**
 * Pre-generation script for voice caching
 * This script generates and caches common voice variations
 * to improve response times and reduce API costs
 */

const path = require('path');
const fs = require('fs');

// Mock recipe data for pre-generation
const SAMPLE_RECIPES = [
  {
    id: 'pasta-bolognese',
    mama: 'nonna-lucia',
    steps: [
      'Heat olive oil in a large pan over medium heat',
      'Add diced onions and cook until translucent',
      'Add ground beef and cook until browned',
      'Pour in crushed tomatoes and simmer for 30 minutes',
      'Season with salt, pepper, and fresh basil',
      'Serve over cooked pasta with parmesan cheese'
    ]
  },
  {
    id: 'paella-valenciana',
    mama: 'abuela-rosa',
    steps: [
      'Heat olive oil in a paella pan over medium-high heat',
      'Add chicken pieces and cook until golden',
      'Add green beans and lima beans, stir for 2 minutes',
      'Add rice and stir to coat with oil',
      'Pour in saffron-infused broth slowly',
      'Simmer without stirring for 20 minutes until rice is tender'
    ]
  },
  {
    id: 'pad-thai',
    mama: 'mae-malai',
    steps: [
      'Soak rice noodles in warm water until soft',
      'Heat oil in a wok over high heat',
      'Add shrimp and cook until pink',
      'Push to one side, scramble eggs on the other',
      'Add noodles, fish sauce, and tamarind paste',
      'Toss with bean sprouts and peanuts, serve with lime'
    ]
  }
];

const VOICE_IDS = ['lucia_voice_id', 'rosa_voice_id', 'malai_voice_id'];

const COMMON_PHRASES = [
  // Cooking instructions
  'Stir gently to combine all ingredients',
  'Let this simmer for about 10 minutes',
  'Taste and adjust seasoning as needed',
  'Remove from heat and let it rest',
  'Serve immediately while hot',
  
  // Encouragement
  'You\'re doing great, keep going!',
  'Perfect! That looks wonderful',
  'Don\'t worry, cooking takes practice',
  'Trust your instincts, you know what to do',
  
  // Timer instructions
  'Set a timer for 5 minutes',
  'This will take about 15 minutes to cook',
  'Check back in 10 minutes',
  'We\'ll wait for the timer to go off',
  
  // Completion
  'Wonderful! You\'ve completed this recipe',
  'Congratulations on making this dish',
  'You should be proud of what you\'ve accomplished',
  'This recipe is now part of your cooking journey'
];

class VoicePreGenerator {
  constructor() {
    this.generatedCount = 0;
    this.errorCount = 0;
    this.startTime = Date.now();
  }

  async generateForRecipe(recipe) {
    console.log(`\n🍳 Pre-generating voice for recipe: ${recipe.id}`);
    
    for (const step of recipe.steps) {
      try {
        await this.generateVariations(step, recipe.mama, 'instruction');
        this.generatedCount++;
      } catch (error) {
        console.error(`❌ Failed to generate for step: ${step.substring(0, 50)}...`);
        this.errorCount++;
      }
    }
  }

  async generateCommonPhrases() {
    console.log('\n💬 Pre-generating common phrases...');
    
    for (const phrase of COMMON_PHRASES) {
      for (const voiceId of VOICE_IDS) {
        try {
          // Determine category based on phrase content
          let category = 'instruction';
          if (phrase.includes('great') || phrase.includes('perfect') || phrase.includes('wonderful')) {
            category = 'encouragement';
          } else if (phrase.includes('timer') || phrase.includes('minutes')) {
            category = 'timer';
          } else if (phrase.includes('completed') || phrase.includes('congratulations')) {
            category = 'completion';
          }
          
          await this.generateVariations(phrase, voiceId, category);
          this.generatedCount++;
        } catch (error) {
          console.error(`❌ Failed to generate phrase for ${voiceId}: ${phrase.substring(0, 30)}...`);
          this.errorCount++;
        }
      }
    }
  }

  async generateVariations(text, voiceId, category) {
    // In a real implementation, this would call the TTS service
    // For now, we'll simulate the process
    const variations = this.mockGenerateVariations(text, voiceId, category);
    
    for (const variation of variations) {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 100));
      
      // Mock caching
      console.log(`✅ Generated: ${variation.substring(0, 60)}...`);
    }
  }

  mockGenerateVariations(baseText, voiceId, category) {
    // Mock salt and pepper phrases
    const saltPhrases = {
      'lucia_voice_id': ['Bene, mio caro,', 'Ascolta, bambino,', 'Come, tesoro,'],
      'rosa_voice_id': ['Muy bien, mi nieto,', 'Escucha, querido,', 'Ven acá, corazón,'],
      'malai_voice_id': ['Dee mak, little one,', 'Listen carefully, sweetie,', 'Come here, darling,']
    };

    const pepperPhrases = {
      'lucia_voice_id': [', just like my nonna taught me', ', with amore and patience', ', the way we\'ve done it for generations'],
      'rosa_voice_id': [', just like we do in Valencia', ', con cariño and wisdom', ', the traditional way, paso a paso'],
      'malai_voice_id': [', the way my grandmother showed me', ', with mindfulness and respect', ', following ancient Thai wisdom']
    };

    const variations = [baseText]; // Always include base text
    
    const salts = saltPhrases[voiceId] || [];
    const peppers = pepperPhrases[voiceId] || [];
    
    // Generate combinations
    for (let i = 0; i < Math.min(2, salts.length); i++) {
      variations.push(`${salts[i]} ${baseText}`);
      
      for (let j = 0; j < Math.min(2, peppers.length); j++) {
        variations.push(`${salts[i]} ${baseText}${peppers[j]}`);
      }
    }
    
    return variations;
  }

  async run() {
    console.log('🎙️  Starting voice pre-generation...');
    console.log(`📊 Will generate for ${SAMPLE_RECIPES.length} recipes and ${COMMON_PHRASES.length} common phrases`);
    
    // Generate for recipes
    for (const recipe of SAMPLE_RECIPES) {
      await this.generateForRecipe(recipe);
    }
    
    // Generate common phrases
    await this.generateCommonPhrases();
    
    // Report results
    const duration = (Date.now() - this.startTime) / 1000;
    console.log('\n📈 Pre-generation Complete!');
    console.log(`✅ Generated: ${this.generatedCount} voice variations`);
    console.log(`❌ Errors: ${this.errorCount}`);
    console.log(`⏱️  Duration: ${duration.toFixed(2)} seconds`);
    console.log(`🚀 Average: ${(this.generatedCount / duration).toFixed(2)} generations/second`);
    
    // Save generation report
    const report = {
      timestamp: new Date().toISOString(),
      generatedCount: this.generatedCount,
      errorCount: this.errorCount,
      duration: duration,
      recipes: SAMPLE_RECIPES.length,
      phrases: COMMON_PHRASES.length,
      voiceIds: VOICE_IDS
    };
    
    const reportPath = path.join(process.cwd(), 'voice-generation-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`📄 Report saved to: ${reportPath}`);
  }
}

// Run the pre-generation if this script is executed directly
if (require.main === module) {
  const generator = new VoicePreGenerator();
  generator.run().catch(error => {
    console.error('❌ Pre-generation failed:', error);
    process.exit(1);
  });
}

module.exports = VoicePreGenerator; 