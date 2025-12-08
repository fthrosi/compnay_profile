'use client';

import { useState,useEffect } from 'react';
import TeamAdd from '@/components/modal/modalTeam/modalAdd';
import TeamEdit from '@/components/modal/modalTeam/modalEdit';
import TeamTable from '@/components/table/team/teamTableAdmin';
import { useUIStore } from '@/store/useUiStore';
import { toast } from 'sonner';
import type { TeamMember } from '@/types/team.type';
import { useDataStore } from '@/store/useDataStore';
import { useSession } from 'next-auth/react';

export default function AdminTeam() {
  const { data: session, status } = useSession();
  
  useEffect(() => {
    console.log("🔍 Session Status:", status);
    console.log("🔍 Session Data:", session);
  }, [session, status]);
  const {fetchRoles,roles} = useDataStore();
  const [loading, setLoading] = useState(false);
  const open = useUIStore((state) => state.open);
  const isModalAdd = useUIStore((state) => state.activeModal === "addTeam");
  const close = useUIStore((state) => state.close);
  const [teams, setTeams] = useState<TeamMember[] | undefined>(undefined);

  const handleDeleteTeam = async (id: number) => {
    try {
      const response = await fetch(`/api/team/${id}`, {
        method: "DELETE",
      });
      const result = await response.json();
      if (result.success) {
        toast.success("Anggota tim berhasil dihapus");
        getTeams();
      } else {
        toast.error("Gagal menghapus anggota tim");
      }
    } catch (error) {
      toast.error("Terjadi kesalahan saat menghapus anggota tim");
    }
  };
    useEffect(() => {
      fetchRoles();
    }, []);

  const getTeams = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/team", {
        method: "GET",
      });
      const result = await response.json();
      if (result.success) {
        setTeams(result.data);
        setLoading(false);
      } else {
        // toast.error("Gagal memuat data role");
        console.log("Gagal memuat data team");
        setLoading(false);
        return [];
      }
    } catch (error) {
      toast.error("Terjadi kesalahan saat memuat data team");
      setLoading(false);
      return [];
    }
  };
  useEffect(() => {
    getTeams();
  }, []);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Team Management</h1>
          <p className="text-slate-600 mt-1">Manage your team members and roles</p>
        </div>
        <button
          onClick={() => open("addTeam")}
          className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          + Tambah Tim Baru
        </button>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-lg shadow p-4 flex gap-4">
        <input
          type="text"
          placeholder="Search team member..."
          className="flex-1 px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-neutral-black"
        />
        <select className="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-neutral-black">
          <option value="">All Roles</option>
          {roles.map((role) => (
            <option key={role.id} value={role.name}>{role.name}</option>
          ))}
        </select>
      </div>

      {/* Team Table */}
      <TeamTable onEditSuccess={getTeams} teams={teams} onDelete={handleDeleteTeam} isLoading={loading} />

      {/* Modal */}
      {isModalAdd &&(
        <TeamAdd onSuccess={getTeams} onClose={() => close()} />
      )}
    </div>
  );
}
