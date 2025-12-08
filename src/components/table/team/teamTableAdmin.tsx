"use client";

import { useState } from "react";
import TeamEdit from "@/components/modal/modalTeam/modalEdit";
import { useUIStore } from "@/store/useUiStore";
import type { TeamMember } from "@/types/team.type";
import { ModalConfirmation } from "@/components/modal/modalConfirmation";
import loadingAnimation from "@/animations/loading.json";
import Lottie from "lottie-react";
import { tr } from "zod/v4/locales";

interface TeamTableProps {
  teams: TeamMember[] | undefined;
  onDelete: (id: number) => void;
  onEditSuccess: () => void;
  isLoading?: boolean;
}

export default function TeamTable({
  teams,
  onDelete,
  onEditSuccess,
  isLoading,
}: TeamTableProps) {
  const open = useUIStore((state) => state.open);
  const isModalEdit = useUIStore((state) => state.activeModal === "editTeam");
  const isModalDelete = useUIStore(
    (state) => state.activeModal === "deleteTeam"
  );
  const close = useUIStore((state) => state.close);
  const [selectedTeamMember, setSelectedTeamMember] =
    useState<TeamMember | null>(null);

  const roleColors: { [key: string]: string } = {
    "1": "bg-red-100 text-red-800",
    "2": "bg-purple-100 text-purple-800",
    "3": "bg-blue-100 text-blue-800",
    "4": "bg-green-100 text-green-800",
    "5": "bg-yellow-100 text-yellow-800",
  };
  const handleEditClick = (teamMember: TeamMember) => {
    setSelectedTeamMember(teamMember);
    open("editTeam");
  };
  const handleDeleteClick = (teamMember: TeamMember) => {
    setSelectedTeamMember(teamMember);
    open("deleteTeam");
  };

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">
                Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">
                Role
              </th>
              <th className="px-6 py-3 text-center text-sm font-semibold text-slate-900">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={5} className="px-6 py-12">
                  <div className="flex justify-center">
                    <Lottie
                      animationData={loadingAnimation}
                      loop={true}
                      className="w-24 h-24"
                    />
                  </div>
                </td>
              </tr>
            ) : teams?.length === 0 ? (
              <tr>
                <td colSpan={3} className="px-6 py-12">
                  <div className="text-center py-12">
                    <p className="text-slate-600 text-lg">
                      No team members yet
                    </p>
                    <p className="text-slate-500 text-sm mt-1">
                      Click "Tambah Tim Baru" to add a member
                    </p>
                  </div>
                </td>
              </tr>
            ) : (
              teams?.map((team) => (
                <tr
                  key={team.id}
                  className="border-b border-slate-200 hover:bg-slate-50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={team.foto || "/placeholder.svg"}
                        alt={team.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <span className="font-medium text-slate-900">
                        {team.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        roleColors[team.jabatanId] ||
                        "bg-slate-100 text-slate-800"
                      }`}
                    >
                      {team.jabatan}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <button
                        className="px-3 py-1 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                        onClick={() => handleEditClick(team)}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteClick(team)}
                        className="px-3 py-1 text-sm font-medium text-red-600 hover:text-red-700 transition-colors"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      {isModalEdit && selectedTeamMember && (
        <TeamEdit
          onSuccess={onEditSuccess}
          onClose={() => close()}
          teamMember={selectedTeamMember}
        />
      )}
      {isModalDelete && selectedTeamMember && (
        <ModalConfirmation
          title="Delete Team Member"
          message={`Are you sure you want to delete ${selectedTeamMember.name}? This action cannot be undone.`}
          onConfirm={() => {
            onDelete(selectedTeamMember.id);
            close();
          }}
          onClose={() => close()}
        />
      )}
    </div>
  );
}
