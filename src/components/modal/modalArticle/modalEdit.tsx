"use client"
import ArticleFormEdit from "@/components/form/articleFormEdit"
import Modal from "../modal"
import type { Article } from "@/types/article"

interface ArticleModalEditProps {
  onSuccess: () => void
  article: Article
}

export default function ArticleModalEdit({onSuccess, article}: ArticleModalEditProps) {
  return (
      <Modal title="Tambah Artikel Baru">
        <ArticleFormEdit onSuccess={onSuccess} article={article} />
      </Modal>
  )
}
