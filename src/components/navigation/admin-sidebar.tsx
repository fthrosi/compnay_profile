"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, FileText, Briefcase, Users } from "lucide-react"

interface SidebarProps {
  isOpen: boolean
  onToggle: () => void
}

export default function Sidebar({ isOpen, onToggle }: SidebarProps) {
  const pathname = usePathname()

  const menuItems = [
    {
      label: "Dashboard",
      href: "/admin",
      icon: LayoutDashboard,
    },
    {
      label: "Manajemen Artikel",
      href: "/admin/articles",
      icon: FileText,
    },
    {
      label: "Manajemen Portofolio",
      href: "/admin/portfolios",
      icon: Briefcase,
    },
    {
      label: "Manajemen Tim",
      href: "/admin/teams",
      icon: Users,
    }
  ]

  const isActive = (href: string) => pathname === href

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/50 lg:hidden z-30 transition-opacity" onClick={onToggle} />}

      {/* Sidebar */}
      <aside
        className={`
          bg-primary border-r border-primary-dark transition-all duration-300 flex flex-col
          fixed lg:relative inset-y-0 left-0 z-40
          ${isOpen ? "w-64" : "w-0 lg:w-64"}
          overflow-hidden h-screen
        `}
      >
        {/* Logo Area */}
        <div className="p-4 sm:p-6 border-b border-primary-dark">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shrink-0">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <h1 className="text-base sm:text-lg font-bold text-white truncate">Admin</h1>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 p-2 sm:p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon
            const active = isActive(item.href)

            return (             
            <Link
                key={item.href}
                href={item.href}
                onClick={() => onToggle()}
                className={`
                  flex items-center gap-3 px-4 py-2 rounded-lg transition-colors text-sm sm:text-base
                  ${active ? "bg-light-primary text-primary-dark" : "text-slate-300 hover:bg-light-primary hover:text-primary"}
                `}
              >
                <Icon size={20} className="shrink-0" />
                <span className="font-medium">{item.label}</span>
              </Link>
            )
          })}
        </nav>

        {/* Footer Area */}
        <div className="p-2 sm:p-4 border-t border-slate-800">
          <div className="flex items-center gap-3 px-4 py-2 min-w-0">
            <div className="w-8 h-8 bg-slate-700 rounded-full shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm font-medium text-white truncate">Admin User</p>
              <p className="text-xs text-slate-400 truncate">admin@example.com</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
