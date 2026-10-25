<div align="center">

# Vardiya Planlama & İş Gücü Yönetim Sistemi

### Karmaşık belediye operasyonları için kural tabanlı vardiya planlama

<img src="./assets/hero.svg" alt="Animasyonlu proje başlığı" />

<p><a href="./README.md">English</a> · <a href="./README.de.md">Deutsch</a> · <a href="./README.tr.md"><strong>Türkçe</strong></a></p>

<p>
  <a href="https://github.com/tahakubilay"><img src="https://img.shields.io/badge/Portfolio-Taha%20Kubilay-181717?style=for-the-badge&logo=github" alt="Portfolio" /></a>
  <a href="https://github.com/tahakubilay/shift-planning-system"><img src="https://img.shields.io/badge/Source-Shift%20Planning-0A66C2?style=for-the-badge&logo=github" alt="Repository" /></a>
  <img src="https://img.shields.io/badge/Status-Portfolio%20Build-7C3AED?style=for-the-badge" alt="Durum" />
  <img src="https://img.shields.io/badge/Demo-Coming%20Soon-F59E0B?style=for-the-badge" alt="Demo yakında" />
</p>

![Last Commit](https://img.shields.io/github/last-commit/tahakubilay/shift-planning-system?style=flat-square)
![Repo Size](https://img.shields.io/github/repo-size/tahakubilay/shift-planning-system?style=flat-square)

</div>

---

## ✨ Kısaca

| | |
|---|---|
| 🏛️ **Bağlam** | Karmaşık belediye personel operasyonları |
| 🗓️ **Problem** | Birbiriyle etkileşen çok sayıda kural ve kısıt altında vardiya planlama |
| 🧠 **Ana Zorluk** | Operasyonel politikaları sürdürülebilir planlama mantığına dönüştürmek |
| 📊 **Planlamanın Ötesi** | Geçmiş kayıtlar, takip, istatistikler ve operasyonel görünürlük |
| 🔐 **Public Sürüm** | Yalnızca sentetik veri |
| 🚀 **Demo** | Planlanan portföy sandbox'ı |

## 🔎 Bu Sistem Neden Var?

Normal bir takvim birini vardiyaya atayabilir.

Gerçek bir iş gücü sistemi ise çok daha zor sorulara cevap vermelidir:

- **Kim bu vardiya için uygun?**
- **Hangi kurallar geçerli?**
- **Hangi atamalar birbiriyle çakışıyor?**
- **İş yükü nasıl dağıtılmalı?**
- **Geçmişte ne oldu?**
- **Yöneticiler sonucu anlayabiliyor mu?**

Bu nedenle vardiya planlama basit bir CRUD süreci değil, **kısıt ve iş kuralı problemidir**.

## ⚙️ Planlama Akışı

```mermaid
flowchart LR
    P[Personel] --> RULES[Kurallar & Kısıtlar]
    AV[Uygunluk] --> RULES
    OPS[Operasyonel İhtiyaç] --> RULES
    RULES --> PLAN[Vardiya Planlama]
    PLAN --> CHECK[Doğrulama]
    CHECK --> SCHEDULE[Yayınlanan Plan]
    SCHEDULE --> HISTORY[(Geçmiş)]
    HISTORY --> ANALYTICS[İstatistikler & Analiz]
```

## ⚡ Temel Yetenekler

| Yetenek | Amaç |
|---|---|
| 🗓️ **Vardiya Planlama** | İş gücü planlarını oluşturmak ve yönetmek |
| 🧩 **Kısıt Yönetimi** | Operasyonel ve personel kısıtlarını uygulamak |
| 👥 **Personel Yönetimi** | Planlamacılara gerekli personel bağlamını sunmak |
| ⚖️ **İş Yükü Farkındalığı** | Daha adil ve bilinçli atama kararlarını desteklemek |
| 🕘 **Geçmiş Takibi** | Önceki atamaları ve operasyonel bağlamı saklamak |
| 📊 **İstatistikler** | Planlama geçmişini anlamlı görünürlüğe dönüştürmek |
| 🧑‍💼 **Yönetim** | Yetkili kullanıcılar için planlama akışlarını merkezileştirmek |

## 🧠 Mühendislik Odağı

Bu projenin asıl değeri gerçek bir operasyonel alanı doğru modellemektir.

Önemli mühendislik başlıkları:

- İş kuralı modelleme
- Kısıt farkındalıklı planlama
- Veri tutarlılığı
- Doğrulama akışları
- Geçmiş kayıtlar
- Raporlama ve analiz
- Sürdürülebilir domain mimarisi
- Yönetim workflow tasarımı

> [!NOTE]
> Public sürüm gerçek belediye personel bilgilerinden bilinçli olarak ayrılmıştır. Gelecekteki demo yalnızca **sentetik kullanıcılar ve sentetik vardiya verileri** içerecektir.

## 🎬 Canlı Demo

**Yakında.**

Public demo, production verisi açığa çıkarmadan örnek planlama kurallarını ve workflow'ları gösterecek recruiter-dostu bir sandbox olarak planlanıyor.

## 🖼️ Ürün Vitrini

| Planlama | Personel | Analiz |
|---|---|---|
| 🗓️ Yakında | 👥 Yakında | 📊 Yakında |

Portföye güvenli build hazır olduğunda gerçek bir workflow GIF'i eklenecek.

## 🛣️ Proje Durumu

- [x] Public case-study reposu
- [x] Problem / çözüm anlatımı
- [x] Planlama mimarisi özeti
- [ ] Temizlenmiş kaynak kodu yayınla
- [ ] Gerçek teknoloji yığınını ekle
- [ ] Ekran görüntülerini ekle
- [ ] Workflow GIF'ini ekle
- [ ] Rule engine / domain modelini belgele
- [ ] Sentetik demoyu deploy et

## 💡 Bu Proje Neden Önemli?

Bu proje, **karmaşık ve yoğun kurallı operasyonel gereksinimleri** yapılandırılmış bir yazılım sistemine dönüştürme becerisini gösterir.

Yalnızca form ve veritabanı geliştirmek değil; alanı anlamak, kısıtları modellemek ve karmaşıklık arttıkça anlaşılır kalabilen bir sistem tasarlamak söz konusudur.

---

<div align="center">

### Geliştiren: [Taha Kubilay](https://github.com/tahakubilay)

`Workforce Management` · `Scheduling` · `Business Rules` · `Enterprise Software` · `Analytics`

</div>