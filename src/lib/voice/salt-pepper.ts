/**
 * Salt & Pepper Phrase System
 * Adds cultural variations to voice-generated text for more natural, authentic speech
 */
import { SaltPepperPhrase, VoiceVariation } from '../../types/voice';

// Salt phrases (beginnings) - add personality to instructions
const SALT_PHRASES: SaltPepperPhrase[] = [
  // Nonna Lucia (Italian)
  { id: 'nonna-salt-1', type: 'salt', category: 'instruction', text: 'Bene, mio caro, now we', voiceId: 'lucia_voice_id' },
  { id: 'nonna-salt-2', type: 'salt', category: 'instruction', text: 'Ascolta, bambino, let\'s', voiceId: 'lucia_voice_id' },
  { id: 'nonna-salt-3', type: 'salt', category: 'instruction', text: 'Come, tesoro, time to', voiceId: 'lucia_voice_id' },
  { id: 'nonna-salt-4', type: 'salt', category: 'encouragement', text: 'Bravissimo! You\'re doing so well, now', voiceId: 'lucia_voice_id' },
  { id: 'nonna-salt-5', type: 'salt', category: 'timer', text: 'Perfetto, while we wait, remember', voiceId: 'lucia_voice_id' },
  
  // Abuela Rosa (Spanish)
  { id: 'abuela-salt-1', type: 'salt', category: 'instruction', text: 'Muy bien, mi nieto, now we', voiceId: 'rosa_voice_id' },
  { id: 'abuela-salt-2', type: 'salt', category: 'instruction', text: 'Escucha, querido, let\'s', voiceId: 'rosa_voice_id' },
  { id: 'abuela-salt-3', type: 'salt', category: 'instruction', text: 'Ven acá, corazón, time to', voiceId: 'rosa_voice_id' },
  { id: 'abuela-salt-4', type: 'salt', category: 'encouragement', text: '¡Excelente! You\'re learning so fast, now', voiceId: 'rosa_voice_id' },
  { id: 'abuela-salt-5', type: 'salt', category: 'timer', text: 'Perfecto, while this cooks, let me tell you', voiceId: 'rosa_voice_id' },
  
  // Mae Malai (Thai)
  { id: 'mae-salt-1', type: 'salt', category: 'instruction', text: 'Dee mak, little one, now we', voiceId: 'malai_voice_id' },
  { id: 'mae-salt-2', type: 'salt', category: 'instruction', text: 'Listen carefully, sweetie, let\'s', voiceId: 'malai_voice_id' },
  { id: 'mae-salt-3', type: 'salt', category: 'instruction', text: 'Come here, darling, time to', voiceId: 'malai_voice_id' },
  { id: 'mae-salt-4', type: 'salt', category: 'encouragement', text: 'Wonderful! You have good hands, now', voiceId: 'malai_voice_id' },
  { id: 'mae-salt-5', type: 'salt', category: 'timer', text: 'Perfect, while we wait, I want to share', voiceId: 'malai_voice_id' },
  
  // Generic salt phrases
  { id: 'generic-salt-1', type: 'salt', category: 'instruction', text: 'Alright, let\'s' },
  { id: 'generic-salt-2', type: 'salt', category: 'instruction', text: 'Now, we\'re going to' },
  { id: 'generic-salt-3', type: 'salt', category: 'instruction', text: 'Next, we need to' },
];

// Pepper phrases (endings) - add warmth and cultural notes
const PEPPER_PHRASES: SaltPepperPhrase[] = [
  // Nonna Lucia (Italian)
  { id: 'nonna-pepper-1', type: 'pepper', category: 'instruction', text: ', just like my nonna taught me in Tuscany', voiceId: 'lucia_voice_id' },
  { id: 'nonna-pepper-2', type: 'pepper', category: 'instruction', text: ', with amore and patience, sempre', voiceId: 'lucia_voice_id' },
  { id: 'nonna-pepper-3', type: 'pepper', category: 'instruction', text: ', the way we\'ve done it for generations', voiceId: 'lucia_voice_id' },
  { id: 'nonna-pepper-4', type: 'pepper', category: 'encouragement', text: ', you remind me of myself when I was young!', voiceId: 'lucia_voice_id' },
  { id: 'nonna-pepper-5', type: 'pepper', category: 'completion', text: ', and now you know the secret of la famiglia', voiceId: 'lucia_voice_id' },
  
  // Abuela Rosa (Spanish)
  { id: 'abuela-pepper-1', type: 'pepper', category: 'instruction', text: ', just like we do in Valencia, with love', voiceId: 'rosa_voice_id' },
  { id: 'abuela-pepper-2', type: 'pepper', category: 'instruction', text: ', con cariño and the wisdom of generations', voiceId: 'rosa_voice_id' },
  { id: 'abuela-pepper-3', type: 'pepper', category: 'instruction', text: ', the traditional way, paso a paso', voiceId: 'rosa_voice_id' },
  { id: 'abuela-pepper-4', type: 'pepper', category: 'encouragement', text: ', you have the hands of a true cocinero!', voiceId: 'rosa_voice_id' },
  { id: 'abuela-pepper-5', type: 'pepper', category: 'completion', text: ', and now this recipe lives in your heart too', voiceId: 'rosa_voice_id' },
  
  // Mae Malai (Thai)
  { id: 'mae-pepper-1', type: 'pepper', category: 'instruction', text: ', the way my grandmother showed me in Bangkok', voiceId: 'malai_voice_id' },
  { id: 'mae-pepper-2', type: 'pepper', category: 'instruction', text: ', with mindfulness and respect for the ingredients', voiceId: 'malai_voice_id' },
  { id: 'mae-pepper-3', type: 'pepper', category: 'instruction', text: ', following the ancient wisdom of Thai cooking', voiceId: 'malai_voice_id' },
  { id: 'mae-pepper-4', type: 'pepper', category: 'encouragement', text: ', you have the spirit of a true Thai cook!', voiceId: 'malai_voice_id' },
  { id: 'mae-pepper-5', type: 'pepper', category: 'completion', text: ', and now you carry forward our culinary heritage', voiceId: 'malai_voice_id' },
  
  // Generic pepper phrases
  { id: 'generic-pepper-1', type: 'pepper', category: 'instruction', text: ', taking your time to do it right' },
  { id: 'generic-pepper-2', type: 'pepper', category: 'instruction', text: ', with care and attention to detail' },
  { id: 'generic-pepper-3', type: 'pepper', category: 'encouragement', text: ', you\'re doing wonderfully!' },
];

export class SaltPepperService {
  private static instance: SaltPepperService;
  
  static getInstance(): SaltPepperService {
    if (!SaltPepperService.instance) {
      SaltPepperService.instance = new SaltPepperService();
    }
    return SaltPepperService.instance;
  }

  // Get random salt phrase for voice and category
  getSaltPhrase(voiceId: string, category: string): SaltPepperPhrase | null {
    const voiceSpecific = SALT_PHRASES.filter(p => 
      p.voiceId === voiceId && p.category === category
    );
    
    const generic = SALT_PHRASES.filter(p => 
      !p.voiceId && p.category === category
    );
    
    const available = voiceSpecific.length > 0 ? voiceSpecific : generic;
    
    if (available.length === 0) return null;
    
    return available[Math.floor(Math.random() * available.length)] || null;
  }

  // Get random pepper phrase for voice and category
  getPepperPhrase(voiceId: string, category: string): SaltPepperPhrase | null {
    const voiceSpecific = PEPPER_PHRASES.filter(p => 
      p.voiceId === voiceId && p.category === category
    );
    
    const generic = PEPPER_PHRASES.filter(p => 
      !p.voiceId && p.category === category
    );
    
    const available = voiceSpecific.length > 0 ? voiceSpecific : generic;
    
    if (available.length === 0) return null;
    
    return available[Math.floor(Math.random() * available.length)] || null;
  }

  // Generate voice variation with salt and pepper
  generateVariation(
    baseText: string, 
    voiceId: string, 
    category: string = 'instruction',
    useSalt: boolean = true,
    usePepper: boolean = true
  ): VoiceVariation {
    const saltPhrase = useSalt ? this.getSaltPhrase(voiceId, category) : null;
    const pepperPhrase = usePepper ? this.getPepperPhrase(voiceId, category) : null;
    
    let finalText = baseText;
    
    if (saltPhrase) {
      finalText = `${saltPhrase.text} ${finalText}`;
    }
    
    if (pepperPhrase) {
      finalText = `${finalText}${pepperPhrase.text}`;
    }
    
    return {
      baseText,
      saltPhrase: saltPhrase ?? undefined,
      pepperPhrase: pepperPhrase ?? undefined,
      finalText
    };
  }

  // Generate multiple variations for pre-caching
  generateMultipleVariations(
    baseText: string, 
    voiceId: string, 
    category: string = 'instruction',
    count: number = 3
  ): VoiceVariation[] {
    const variations: VoiceVariation[] = [];
    
    // Always include the base text without variations
    variations.push({
      baseText,
      finalText: baseText
    });
    
    // Generate variations with different combinations
    for (let i = 0; i < count; i++) {
      const variation = this.generateVariation(baseText, voiceId, category, true, true);
      
      // Avoid duplicates
      if (!variations.some(v => v.finalText === variation.finalText)) {
        variations.push(variation);
      }
    }
    
    return variations;
  }

  // Get all available phrases for a voice
  getAvailablePhrases(voiceId: string): {
    salt: SaltPepperPhrase[];
    pepper: SaltPepperPhrase[];
  } {
    const salt = SALT_PHRASES.filter(p => p.voiceId === voiceId || !p.voiceId);
    const pepper = PEPPER_PHRASES.filter(p => p.voiceId === voiceId || !p.voiceId);
    
    return { salt, pepper };
  }

  // Add new salt or pepper phrase
  addPhrase(phrase: Omit<SaltPepperPhrase, 'id'>): SaltPepperPhrase {
    const newPhrase: SaltPepperPhrase = {
      ...phrase,
      id: `custom-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    };
    
    if (phrase.type === 'salt') {
      SALT_PHRASES.push(newPhrase);
    } else {
      PEPPER_PHRASES.push(newPhrase);
    }
    
    return newPhrase;
  }

  // Get statistics about phrase usage
  getStats(): {
    totalSaltPhrases: number;
    totalPepperPhrases: number;
    phrasesByVoice: Record<string, { salt: number; pepper: number }>;
  } {
    const stats = {
      totalSaltPhrases: SALT_PHRASES.length,
      totalPepperPhrases: PEPPER_PHRASES.length,
      phrasesByVoice: {} as Record<string, { salt: number; pepper: number }>
    };
    
    // Count phrases by voice
    const voices = ['lucia_voice_id', 'rosa_voice_id', 'malai_voice_id', 'generic'];
    
    voices.forEach(voiceId => {
      const saltCount = SALT_PHRASES.filter(p => 
        p.voiceId === voiceId || (voiceId === 'generic' && !p.voiceId)
      ).length;
      
      const pepperCount = PEPPER_PHRASES.filter(p => 
        p.voiceId === voiceId || (voiceId === 'generic' && !p.voiceId)
      ).length;
      
      stats.phrasesByVoice[voiceId] = { salt: saltCount, pepper: pepperCount };
    });
    
    return stats;
  }
}

export default SaltPepperService; 