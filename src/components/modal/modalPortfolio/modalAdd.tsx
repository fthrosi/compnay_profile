"use client";
import PortfolioForm from "@/components/form/portoForm";
import Modal from "../modal";

interface PortfolioModalProps {
  onSuccess: () => void;
}

export default function PortfolioModal({ onSuccess }: PortfolioModalProps) {
  return (
      <Modal title="Tambah Portofolio Baru">
        <PortfolioForm onSuccess={onSuccess} />
      </Modal>
  );
}
