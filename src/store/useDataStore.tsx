import { create } from "zustand";
import { TechStack } from "@/types/techstack";
import { Role } from "@/types/role";
import type { categoryPortfolioType as Category_Portfolio } from "@/types/portofolio.type";
import type { articleCategoriesType as Category_Article } from "@/types/article";

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

  // ✅ Loading states
  isLoading: {
    techStacks: boolean;
    roles: boolean;
    portfolioCategories: boolean;
    articleCategories: boolean;
  };

  // ✅ Reset all data
  resetAllData: () => void;
}

export const useDataStore = create<DataState>((set, get) => ({
  // ========== TECH STACKS ==========
  techStacks: [],
  setTechStacks: (stacks) => set({ techStacks: stacks }),
  fetchTechStacks: async () => {
    // ✅ Cek apakah data sudah ada (cache)
    if (get().techStacks.length > 0) return;

    set((state) => ({
      isLoading: { ...state.isLoading, techStacks: true },
    }));

    try {
      const res = await fetch("/api/techstack",{
        method: "GET",
      });
      const data = await res.json();
      set({ techStacks: data.data || [] });
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
    if (get().roles.length > 0) return;

    set((state) => ({
      isLoading: { ...state.isLoading, roles: true },
    }));

    try {
      const res = await fetch("/api/role",{
        method: "GET",
      });
      const data = await res.json();
      set({ roles: data.data || [] });
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
    if (get().portfolioCategories.length > 0) return;

    set((state) => ({
      isLoading: { ...state.isLoading, portfolioCategories: true },
    }));

    try {
      const res = await fetch("/api/category_portfolio",{
        method: "GET",
      });
      const data = await res.json();
      set({ portfolioCategories: data.data || [] });
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
    if (get().articleCategories.length > 0) return;

    set((state) => ({
      isLoading: { ...state.isLoading, articleCategories: true },
    }));

    try {
      const res = await fetch("/api/category_article",{
        method: "GET",
      });
      const data = await res.json();
      set({ articleCategories: data.data || [] });
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
  },

  // ========== RESET ALL ==========
  resetAllData: () =>
    set({
      techStacks: [],
      roles: [],
      portfolioCategories: [],
      articleCategories: [],
      isLoading: {
        techStacks: false,
        roles: false,
        portfolioCategories: false,
        articleCategories: false,
      },
    }),
}));
