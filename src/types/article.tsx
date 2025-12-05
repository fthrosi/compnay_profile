export type detailType = {
    icon: React.ReactNode;
    label: string;
};

export type articleCategoriesType = {
    id: number;
    name: string;
};

export type Article = {
    id: number;
    title: string;
    category: articleCategoriesType;
    image_id: string;
    image_url: string;
    content: string;
    created_at: string;
};
