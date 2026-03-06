"use client"

export default function FooterSection() {
  const companies = [
    { name: "Tuna Sentetik", desc: "Sentetik Dokuma" },
    { name: "Tuna Medical", desc: "Tıbbi Cihazlar" },
    { name: "Efe Tıp", desc: "Medikal Ürünler" },
    { name: "Wellmed", desc: "Sağlık Çözümleri" }
  ]

  return (
    <footer className="py-16 px-6 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-3xl font-light mb-4">TUNA GROUP</h3>
            <p className="text-gray-400 leading-relaxed">
              1984'ten bu yana sektörün öncü ismi
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4 uppercase tracking-wider">Grup Şirketleri</h4>
            <ul className="space-y-3 text-gray-400">
              {companies.map((company, i) => (
                <li key={i}>
                  <div className="font-medium text-white">{company.name}</div>
                  <div className="text-sm">{company.desc}</div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4 uppercase tracking-wider">İletişim</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Başpınar OSB, Gaziantep</li>
              <li>+90 342 360 98 55</li>
              <li>info@tunagroup.com.tr</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          © 2024 Tuna Group. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  )
}
