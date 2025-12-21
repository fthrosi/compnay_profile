"use client"

export default function AdminDashboard() {
  const stats = [
    {
      title: "Total Artikel",
      value: "24",
      icon: "📄",
    },
    {
      title: "Total Viewers",
      value: "1.2K",
      icon: "👁️",
    },
    {
      title: "Pertumbuhan",
      value: "+12%",
      icon: "📈",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">Selamat datang kembali, Admin!</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900 mt-2">{stat.value}</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-lg text-2xl">{stat.icon}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
        <h2 className="text-lg font-bold text-gray-900 mb-4">Aktivitas Terbaru</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex items-center justify-between pb-4 border-b border-gray-200 last:border-b-0">
              <div>
                <p className="text-gray-900 font-medium">Artikel baru dipublikasikan</p>
                <p className="text-sm text-gray-600">2 jam yang lalu</p>
              </div>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">Baru</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
