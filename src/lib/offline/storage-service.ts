/**
 * Offline Storage Service
 * Manages offline data storage using IndexedDB for PWA functionality
 */

interface DBSchema {
  recipes: {
    key: string;
    value: Recipe;
    indexes: { 'by-mama': string; 'by-difficulty': string };
  };
  voiceFiles: {
    key: string;
    value: VoiceFile;
    indexes: { 'by-voice-id': string; 'by-category': string };
  };
  cookingSessions: {
    key: string;
    value: CookingSession;
    indexes: { 'by-recipe': string; 'by-date': number };
  };
  userProgress: {
    key: string;
    value: UserProgress;
  };
}

interface Recipe {
  id: string;
  title: string;
  mamaId: string;
  difficulty: 'easy' | 'medium' | 'hard';
  cookTime: number;
  prepTime: number;
  servings: number;
  ingredients: Ingredient[];
  steps: RecipeStep[];
  images: string[];
  tags: string[];
  nutritionInfo?: NutritionInfo;
  createdAt: Date;
  updatedAt: Date;
  cached: boolean;
}

interface VoiceFile {
  id: string;
  textHash: string;
  voiceId: string;
  category: string;
  audioBlob: Blob;
  duration: number;
  fileSize: number;
  createdAt: Date;
  expiresAt: Date;
  accessCount: number;
  lastAccessed: Date;
}

interface CookingSession {
  id: string;
  recipeId: string;
  startedAt: Date;
  completedAt?: Date;
  currentStep: number;
  totalSteps: number;
  status: 'active' | 'paused' | 'completed' | 'abandoned';
  notes: string[];
  modifications: string[];
  rating?: number;
  offline: boolean;
}

interface UserProgress {
  userId: string;
  completedRecipes: string[];
  favoriteRecipes: string[];
  skillLevel: 'beginner' | 'intermediate' | 'advanced';
  preferredMamas: string[];
  dietaryRestrictions: string[];
  lastSync: Date;
}

interface Ingredient {
  id: string;
  name: string;
  amount: number;
  unit: string;
  optional?: boolean;
  substitutes?: string[];
}

interface RecipeStep {
  id: string;
  stepNumber: number;
  instruction: string;
  duration?: number;
  temperature?: number;
  voiceInstructions: {
    [voiceId: string]: string;
  };
  images?: string[];
  tips?: string[];
}

interface NutritionInfo {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
  sugar: number;
  sodium: number;
}

class OfflineStorageService {
  private static instance: OfflineStorageService;
  private db: IDBDatabase | null = null;
  private dbName = 'MAMIA_Offline';
  private version = 1;

  static getInstance(): OfflineStorageService {
    if (!OfflineStorageService.instance) {
      OfflineStorageService.instance = new OfflineStorageService();
    }
    return OfflineStorageService.instance;
  }

  // Initialize IndexedDB
  async initialize(): Promise<void> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, this.version);

      request.onerror = () => {
        console.error('Failed to open IndexedDB:', request.error);
        reject(request.error);
      };

      request.onsuccess = () => {
        this.db = request.result;
        console.log('✅ IndexedDB initialized successfully');
        resolve();
      };

      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;
        this.setupDatabase(db);
      };
    });
  }

  private setupDatabase(db: IDBDatabase): void {
    console.log('�� Setting up IndexedDB schema...');

    // Recipes store
    if (!db.objectStoreNames.contains('recipes')) {
      const recipeStore = db.createObjectStore('recipes', { keyPath: 'id' });
      recipeStore.createIndex('by-mama', 'mamaId', { unique: false });
      recipeStore.createIndex('by-difficulty', 'difficulty', { unique: false });
    }

    // Voice files store
    if (!db.objectStoreNames.contains('voiceFiles')) {
      const voiceStore = db.createObjectStore('voiceFiles', { keyPath: 'id' });
      voiceStore.createIndex('by-voice-id', 'voiceId', { unique: false });
      voiceStore.createIndex('by-category', 'category', { unique: false });
    }

    // Cooking sessions store
    if (!db.objectStoreNames.contains('cookingSessions')) {
      const sessionStore = db.createObjectStore('cookingSessions', { keyPath: 'id' });
      sessionStore.createIndex('by-recipe', 'recipeId', { unique: false });
      sessionStore.createIndex('by-date', 'startedAt', { unique: false });
    }

    // User progress store
    if (!db.objectStoreNames.contains('userProgress')) {
      db.createObjectStore('userProgress', { keyPath: 'userId' });
    }

    console.log('✅ IndexedDB schema setup complete');
  }

  // Recipe operations
  async saveRecipe(recipe: Recipe): Promise<void> {
    if (!this.db) await this.initialize();

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(['recipes'], 'readwrite');
      const store = transaction.objectStore('recipes');
      
      recipe.cached = true;
      recipe.updatedAt = new Date();
      
      const request = store.put(recipe);

      request.onsuccess = () => {
        console.log('✅ Recipe saved to IndexedDB:', recipe.title);
        resolve();
      };

      request.onerror = () => {
        console.error('❌ Failed to save recipe:', request.error);
        reject(request.error);
      };
    });
  }

  async getRecipe(id: string): Promise<Recipe | null> {
    if (!this.db) await this.initialize();

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(['recipes'], 'readonly');
      const store = transaction.objectStore('recipes');
      const request = store.get(id);

      request.onsuccess = () => {
        resolve(request.result || null);
      };

      request.onerror = () => {
        console.error('❌ Failed to get recipe:', request.error);
        reject(request.error);
      };
    });
  }

  async getRecipesByMama(mamaId: string): Promise<Recipe[]> {
    if (!this.db) await this.initialize();

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(['recipes'], 'readonly');
      const store = transaction.objectStore('recipes');
      const index = store.index('by-mama');
      const request = index.getAll(mamaId);

      request.onsuccess = () => {
        resolve(request.result);
      };

      request.onerror = () => {
        console.error('❌ Failed to get recipes by mama:', request.error);
        reject(request.error);
      };
    });
  }

  async getAllCachedRecipes(): Promise<Recipe[]> {
    if (!this.db) await this.initialize();

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(['recipes'], 'readonly');
      const store = transaction.objectStore('recipes');
      const request = store.getAll();

      request.onsuccess = () => {
        resolve(request.result.filter(recipe => recipe.cached));
      };

      request.onerror = () => {
        console.error('❌ Failed to get cached recipes:', request.error);
        reject(request.error);
      };
    });
  }

  // Voice file operations
  async saveVoiceFile(voiceFile: VoiceFile): Promise<void> {
    if (!this.db) await this.initialize();

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(['voiceFiles'], 'readwrite');
      const store = transaction.objectStore('voiceFiles');
      const request = store.put(voiceFile);

      request.onsuccess = () => {
        console.log('✅ Voice file saved to IndexedDB:', voiceFile.id);
        resolve();
      };

      request.onerror = () => {
        console.error('❌ Failed to save voice file:', request.error);
        reject(request.error);
      };
    });
  }

  async getVoiceFile(id: string): Promise<VoiceFile | null> {
    if (!this.db) await this.initialize();

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(['voiceFiles'], 'readwrite');
      const store = transaction.objectStore('voiceFiles');
      const request = store.get(id);

      request.onsuccess = () => {
        const voiceFile = request.result;
        if (voiceFile) {
          // Update access statistics
          voiceFile.accessCount++;
          voiceFile.lastAccessed = new Date();
          store.put(voiceFile);
        }
        resolve(voiceFile || null);
      };

      request.onerror = () => {
        console.error('❌ Failed to get voice file:', request.error);
        reject(request.error);
      };
    });
  }

  async getVoiceFilesByVoice(voiceId: string): Promise<VoiceFile[]> {
    if (!this.db) await this.initialize();

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(['voiceFiles'], 'readonly');
      const store = transaction.objectStore('voiceFiles');
      const index = store.index('by-voice-id');
      const request = index.getAll(voiceId);

      request.onsuccess = () => {
        resolve(request.result);
      };

      request.onerror = () => {
        console.error('❌ Failed to get voice files by voice:', request.error);
        reject(request.error);
      };
    });
  }

  // Cooking session operations
  async saveCookingSession(session: CookingSession): Promise<void> {
    if (!this.db) await this.initialize();

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(['cookingSessions'], 'readwrite');
      const store = transaction.objectStore('cookingSessions');
      const request = store.put(session);

      request.onsuccess = () => {
        console.log('✅ Cooking session saved:', session.id);
        resolve();
      };

      request.onerror = () => {
        console.error('❌ Failed to save cooking session:', request.error);
        reject(request.error);
      };
    });
  }

  async getCookingSession(id: string): Promise<CookingSession | null> {
    if (!this.db) await this.initialize();

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(['cookingSessions'], 'readonly');
      const store = transaction.objectStore('cookingSessions');
      const request = store.get(id);

      request.onsuccess = () => {
        resolve(request.result || null);
      };

      request.onerror = () => {
        console.error('❌ Failed to get cooking session:', request.error);
        reject(request.error);
      };
    });
  }

  async getActiveCookingSessions(): Promise<CookingSession[]> {
    if (!this.db) await this.initialize();

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(['cookingSessions'], 'readonly');
      const store = transaction.objectStore('cookingSessions');
      const request = store.getAll();

      request.onsuccess = () => {
        const activeSessions = request.result.filter(
          session => session.status === 'active' || session.status === 'paused'
        );
        resolve(activeSessions);
      };

      request.onerror = () => {
        console.error('❌ Failed to get active cooking sessions:', request.error);
        reject(request.error);
      };
    });
  }

  // User progress operations
  async saveUserProgress(progress: UserProgress): Promise<void> {
    if (!this.db) await this.initialize();

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(['userProgress'], 'readwrite');
      const store = transaction.objectStore('userProgress');
      
      progress.lastSync = new Date();
      const request = store.put(progress);

      request.onsuccess = () => {
        console.log('✅ User progress saved');
        resolve();
      };

      request.onerror = () => {
        console.error('❌ Failed to save user progress:', request.error);
        reject(request.error);
      };
    });
  }

  async getUserProgress(userId: string): Promise<UserProgress | null> {
    if (!this.db) await this.initialize();

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(['userProgress'], 'readonly');
      const store = transaction.objectStore('userProgress');
      const request = store.get(userId);

      request.onsuccess = () => {
        resolve(request.result || null);
      };

      request.onerror = () => {
        console.error('❌ Failed to get user progress:', request.error);
        reject(request.error);
      };
    });
  }

  // Storage management
  async getStorageStats(): Promise<{
    recipes: number;
    voiceFiles: number;
    sessions: number;
    totalSize: number;
  }> {
    if (!this.db) await this.initialize();

    const [recipes, voiceFiles, sessions] = await Promise.all([
      this.getAllCachedRecipes(),
      this.getAllVoiceFiles(),
      this.getAllCookingSessions()
    ]);

    // Calculate approximate size
    let totalSize = 0;
    
    // Estimate recipe size (JSON + images)
    totalSize += recipes.length * 50 * 1024; // ~50KB per recipe
    
    // Calculate voice file sizes
    voiceFiles.forEach(file => {
      totalSize += file.fileSize;
    });
    
    // Estimate session size
    totalSize += sessions.length * 5 * 1024; // ~5KB per session

    return {
      recipes: recipes.length,
      voiceFiles: voiceFiles.length,
      sessions: sessions.length,
      totalSize
    };
  }

  async clearExpiredVoiceFiles(): Promise<number> {
    if (!this.db) await this.initialize();

    const voiceFiles = await this.getAllVoiceFiles();
    const now = new Date();
    let deletedCount = 0;

    const transaction = this.db!.transaction(['voiceFiles'], 'readwrite');
    const store = transaction.objectStore('voiceFiles');

    for (const file of voiceFiles) {
      if (file.expiresAt && now > file.expiresAt) {
        await new Promise<void>((resolve, reject) => {
          const deleteRequest = store.delete(file.id);
          deleteRequest.onsuccess = () => {
            deletedCount++;
            resolve();
          };
          deleteRequest.onerror = () => reject(deleteRequest.error);
        });
      }
    }

    console.log(`🗑️ Cleared ${deletedCount} expired voice files`);
    return deletedCount;
  }

  async clearAllData(): Promise<void> {
    if (!this.db) await this.initialize();

    const stores = ['recipes', 'voiceFiles', 'cookingSessions', 'userProgress'];
    
    const transaction = this.db!.transaction(stores, 'readwrite');
    
    const clearPromises = stores.map(storeName => {
      return new Promise<void>((resolve, reject) => {
        const store = transaction.objectStore(storeName);
        const request = store.clear();
        
        request.onsuccess = () => resolve();
        request.onerror = () => reject(request.error);
      });
    });

    await Promise.all(clearPromises);
    console.log('🗑️ All offline data cleared');
  }

  // Private helper methods
  private async getAllVoiceFiles(): Promise<VoiceFile[]> {
    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(['voiceFiles'], 'readonly');
      const store = transaction.objectStore('voiceFiles');
      const request = store.getAll();

      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  private async getAllCookingSessions(): Promise<CookingSession[]> {
    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(['cookingSessions'], 'readonly');
      const store = transaction.objectStore('cookingSessions');
      const request = store.getAll();

      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  // Check if we're online
  isOnline(): boolean {
    return navigator.onLine;
  }

  // Network status event listeners
  setupNetworkListeners(): void {
    window.addEventListener('online', () => {
      console.log('🌐 Network connection restored');
      this.syncPendingData();
    });

    window.addEventListener('offline', () => {
      console.log('📱 Switched to offline mode');
    });
  }

  // Sync pending data when network is restored
  private async syncPendingData(): Promise<void> {
    try {
      // Sync completed cooking sessions
      const sessions = await this.getActiveCookingSessions();
      for (const session of sessions) {
        if (session.offline && session.status === 'completed') {
          // TODO: Sync to server
          console.log('📤 Syncing completed session:', session.id);
        }
      }

      // Sync user progress
      // TODO: Implement server sync
      console.log('📤 Syncing user progress...');
    } catch (error) {
      console.error('❌ Failed to sync pending data:', error);
    }
  }
}

export default OfflineStorageService;
export type { Recipe, VoiceFile, CookingSession, UserProgress, Ingredient, RecipeStep }; 