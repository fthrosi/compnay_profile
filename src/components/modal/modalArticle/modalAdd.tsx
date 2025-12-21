"use client"
import ArticleForm from "@/components/form/articleForm"
import Modal from "../modal"

interface ArticleModalProps {
  onSuccess: () => void
}

export default function ArticleModal({onSuccess}: ArticleModalProps) {
  return (
      <Modal title="Tambah Artikel Baru">
        <ArticleForm onSuccess={onSuccess} />
      </Modal>
  )
}
