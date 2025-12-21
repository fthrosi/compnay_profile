"use client";
import PortfolioEditForm from "@/components/form/portoFormEdit";
import Modal from "../modal";
import type { portofolioType } from "@/types/portofolio.type";

interface PortfolioModalProps {
  onSuccess: () => void;
  portfolio: portofolioType;
}

export default function EditPortfolioModal({ onSuccess, portfolio }: PortfolioModalProps) {
  return (
      <Modal title="Edit Portofolio">
        <PortfolioEditForm onSuccess={onSuccess} portfolio={portfolio} />
      </Modal>
  );
}
