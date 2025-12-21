import { create } from "zustand";
import { TechStack } from "@/types/techstack";
import { Role } from "@/types/role";
import type { categoryPortfolioType as Category_Portfolio, portofolioType } from "@/types/portofolio.type";
import type { articleCategoriesType as Category_Article,Article } from "@/types/article";

interface DataState {
  // ✅ Tech Stacks
  techStacks: TechStack[];
  setTechStacks: (stacks: TechStack[]) => void;
  fetchTechStacks: () => Promise<void>;

  // ✅ Roles
  roles: Role[];
  setRoles: (roles: Role[]) => void;
  fetchRoles: () => Promise<void>;

  // ✅ Portfolio Categories
  portfolioCategories: Category_Portfolio[];
  setPortfolioCategories: (categories: Category_Portfolio[]) => void;
  fetchPortfolioCategories: () => Promise<void>;

  // ✅ Article Categories
  articleCategories: Category_Article[];
  setArticleCategories: (categories: Category_Article[]) => void;
  fetchArticleCategories: () => Promise<void>;

  //✅ Portfolio Data
  portfolios: portofolioType[];
  setPortfolios: (portfolios: portofolioType[]) => void;
  fetchPortfolios: () => Promise<void>;

  //✅ Article Data
  articles: Article[];
  setArticles: (articles: Article[]) => void;
  fetchArticles: () => Promise<void>;

  // ✅ Loading states
  isLoading: {
    techStacks: boolean;
    roles: boolean;
    portfolioCategories: boolean;
    articleCategories: boolean;
    portfolios: boolean;
    articles: boolean;
  };

  // ✅ Fetched flags to prevent refetching
  isFetched: {
    techStacks: boolean;
    roles: boolean;
    portfolioCategories: boolean;
    articleCategories: boolean;
    portfolios: boolean;
    articles: boolean;
  };

  // ✅ Reset all data
  resetAllData: () => void;
}

export const useDataStore = create<DataState>((set, get) => ({
  // ========== PORTFOLIO ==========
  portfolios: [],
  setPortfolios: (portfolios) => set({ portfolios }),
  fetchPortfolios: async () => {
    if (get().isFetched.portfolios) return;
    set((state) => ({
      isLoading: { ...state.isLoading, portfolios: true },
    }));
    try {
      const res = await fetch("/api/portfolio",{
        method: "GET",
      });
      const data = await res.json();
      set((state) => ({ 
        portfolios: data.data || [],
        isFetched: { ...state.isFetched, portfolios: true }
      }));
    }catch (error) {
      console.error("Error fetching portfolios:", error);
    } finally {
      set((state) => ({
        isLoading: { ...state.isLoading, portfolios: false },
      }));
    }
  },

  // ========== ARTICLES ==========
  articles: [],
  setArticles: (articles) => set({ articles }),
  fetchArticles: async () => {
    if (get().isFetched.articles) return;

    set((state) => ({
      isLoading: { ...state.isLoading, articles: true },
    }));
    try {
      const res = await fetch("/api/article",{
        method: "GET",
      });
      const data = await res.json();
      set((state) => ({ 
        articles: data.data || [],
        isFetched: { ...state.isFetched, articles: true }
      }));
    } catch (error) {
      console.error("Error fetching articles:", error);
    } finally {
      set((state) => ({
        isLoading: { ...state.isLoading, articles: false },
      }));
    }
  },

  // ========== TECH STACKS ==========
  techStacks: [],
  setTechStacks: (stacks) => set({ techStacks: stacks }),
  fetchTechStacks: async () => {
    // ✅ Cek apakah data sudah pernah di-fetch
    if (get().isFetched.techStacks) return;

    set((state) => ({
      isLoading: { ...state.isLoading, techStacks: true },
    }));

    try {
      const res = await fetch("/api/techstack",{
        method: "GET",
      });
      const data = await res.json();
      set((state) => ({ 
        techStacks: data.data || [],
        isFetched: { ...state.isFetched, techStacks: true }
      }));
    } catch (error) {
      console.error("Error fetching tech stacks:", error);
    } finally {
      set((state) => ({
        isLoading: { ...state.isLoading, techStacks: false },
      }));
    }
  },

  // ========== ROLES ==========
  roles: [],
  setRoles: (roles) => set({ roles }),
  fetchRoles: async () => {
    if (get().isFetched.roles) return;

    set((state) => ({
      isLoading: { ...state.isLoading, roles: true },
    }));

    try {
      const res = await fetch("/api/role",{
        method: "GET",
      });
      const data = await res.json();
      set((state) => ({ 
        roles: data.data || [],
        isFetched: { ...state.isFetched, roles: true }
      }));
    } catch (error) {
      console.error("Error fetching roles:", error);
    } finally {
      set((state) => ({
        isLoading: { ...state.isLoading, roles: false },
      }));
    }
  },

  // ========== PORTFOLIO CATEGORIES ==========
  portfolioCategories: [],
  setPortfolioCategories: (categories) => set({ portfolioCategories: categories }),
  fetchPortfolioCategories: async () => {
    if (get().isFetched.portfolioCategories) return;

    set((state) => ({
      isLoading: { ...state.isLoading, portfolioCategories: true },
    }));

    try {
      const res = await fetch("/api/category_portfolio",{
        method: "GET",
      });
      const data = await res.json();
      set((state) => ({ 
        portfolioCategories: data.data || [],
        isFetched: { ...state.isFetched, portfolioCategories: true }
      }));
    } catch (error) {
      console.error("Error fetching portfolio categories:", error);
    } finally {
      set((state) => ({
        isLoading: { ...state.isLoading, portfolioCategories: false },
      }));
    }
  },

  // ========== ARTICLE CATEGORIES ==========
  articleCategories: [],
  setArticleCategories: (categories) => set({ articleCategories: categories }),
  fetchArticleCategories: async () => {
    if (get().isFetched.articleCategories) return;

    set((state) => ({
      isLoading: { ...state.isLoading, articleCategories: true },
    }));

    try {
      const res = await fetch("/api/category_article",{
        method: "GET",
      });
      const data = await res.json();
      set((state) => ({ 
        articleCategories: data.data || [],
        isFetched: { ...state.isFetched, articleCategories: true }
      }));
    } catch (error) {
      console.error("Error fetching article categories:", error);
    } finally {
      set((state) => ({
        isLoading: { ...state.isLoading, articleCategories: false },
      }));
    }
  },

  // ========== LOADING STATES ==========
  isLoading: {
    techStacks: false,
    roles: false,
    portfolioCategories: false,
    articleCategories: false,
    portfolios: false,
    articles: false,
  },

  // ========== FETCHED FLAGS ==========
  isFetched: {
    techStacks: false,
    roles: false,
    portfolioCategories: false,
    articleCategories: false,
    portfolios: false,
    articles: false,
  },

  // ========== RESET ALL ==========
  resetAllData: () =>
    set({
      techStacks: [],
      roles: [],
      portfolioCategories: [],
      articleCategories: [],
      portfolios: [],
      articles: [],
      isLoading: {
        techStacks: false,
        roles: false,
        portfolioCategories: false,
        articleCategories: false,
        portfolios: false,
        articles: false,
      },
      isFetched: {
        techStacks: false,
        roles: false,
        portfolioCategories: false,
        articleCategories: false,
        portfolios: false,
        articles: false,
      },
    }),
}));
