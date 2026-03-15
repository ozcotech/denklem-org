# DENKLEM Web Modernizasyon Planı

## 1. Amaç
Denklem web sitesini, mevcut mobil uygulama görsel diliyle daha uyumlu, daha modern, daha sürdürülebilir ve içerik yönetimi daha kolay bir yapıya taşımak.

## 2. Kapsam
Bu plan aşağıdaki alanları kapsar:

- Tasarım sistemi ve görsel modernizasyon
- Sayfa mimarisi ve içerik akışı
- TR/EN çok dilli yapı sadeleştirmesi
- Blog ve duyuru içerik altyapısının dinamikleştirilmesi
- Erişilebilirlik, performans ve SEO iyileştirmeleri
- Kod organizasyonu ve bakım kolaylığı

Bu plan, mobil uygulama kodunu değil, web sitesi kod tabanını hedefler.

## 3. Başarı Kriterleri
Modernizasyon sonunda aşağıdaki kriterlerin sağlanması hedeflenir:

- Ana sayfa ilk 5 saniyede ürün değerini net anlatır.
- Web tasarımı mobil uygulama kimliğiyle görsel olarak tutarlı hale gelir.
- Blog ve duyurular statik kartlardan dinamik içerik koleksiyonuna taşınır.
- TR ve EN içerik yapısı tekrar eden koddan kurtarılır (DRY yaklaşımı).
- Stil katmanı modüler olur (token, base, component, utility ayrımı).
- Lighthouse (mobile) temel metriklerinde iyileşme görülür.
- Temel erişilebilirlik sorunları giderilir (klavye, focus, semantik).

## 4. Uygulama Stratejisi
Riski azaltmak için modernizasyonu küçük, doğrulanabilir adımlarla ilerleteceğiz:

1. Altyapı ve içerik sistemi
2. Ana sayfa modernizasyonu
3. İç sayfaların görsel ve içerik standardizasyonu
4. Çok dilli yapı sadeleştirmesi
5. Performans + SEO + erişilebilirlik son rötuşları

Her faz sonunda hızlı doğrulama yapılacak.

## 5. Adım Adım Plan

## Faz 0 - Hazırlık ve Referans Çıkarma
Durum: Planlandı

Adımlar:

1. Mevcut sayfa, bileşen ve stil haritasını doğrula.
2. Kullanılmayan/yarım kalan bileşenleri işaretle ve temizle:
   - `FeatureCarousel.astro` → silinecek (kodda "BU DOSYA SİLİNECEK!!!!" notu mevcut, kullanılmıyor)
   - `BlogLayout.astro` → içerik eklenecek veya silinecek
3. TR/EN tekrar eden dosyaları belirle.
4. Statik blog/duyuru alanlarının dinamik dönüşüm kapsamını netleştir.

Not: Site tamamen statik (Astro build-time). Blog ve duyurular için sunucu gerekmez.
Markdown (.md / .mdx) dosyası eklemek yeterlidir; `npm run build` ile otomatik sayfa üretilir.

Çıktı:

- Refactor öncelik listesi
- Hızlı kazanım maddeleri
- Temizlenen kullanılmayan dosyalar

Kabul Kriteri:

- Modernizasyon sıralaması netleştirilmiş olmalı.
- Kullanılmayan dosyalar kaldırılmış olmalı.

## Faz 1 - İçerik Altyapısı (Blog ve Duyurular)
Durum: Planlandı

Not: Sunucu gerekmez. Astro Content Collections build-time çalışır.
Yeni içerik = `src/content/blog/` klasörüne yeni bir `.md` dosyası eklemek.

Adımlar:

1. `src/content/config.ts` yapısını kur (blog + announcements collection).
2. `src/content/blog/` ve `src/content/announcements/` içinde örnek içerik dosyaları oluştur.
3. Liste sayfalarını statik kartlardan collection tabanlı render’a çevir.
4. Tekil içerik sayfaları için layout akışını ekle.
5. TR/EN içerik dil alanı (veya slug stratejisi) belirleyip uygula.

Dikkat: Faz 4’teki ortak kart bileşeni bu koleksiyon şemasıyla uyumlu tasarlanmalı.
(Faz 1 şeması → Faz 4 kart tasarımını doğrudan etkiler)

Çıktı:

- Dinamik blog listesi + detay sayfaları
- Dinamik duyuru listesi + detay sayfaları

Kabul Kriteri:

- Yeni bir .md dosyası eklendiğinde kod değiştirmeden listede görünmeli.

## Faz 2 - Tasarım Sistemi ve Stil Katmanları
Durum: Planlandı

Adımlar:

1. Global stil dosyasını katmanlara böl:
   - `src/styles/tokens.css`
   - `src/styles/base.css`
   - `src/styles/components.css`
   - `src/styles/utilities.css`
2. Renk, shadow, radius, spacing değişkenlerini token haline getir.
3. ID bazlı stilleri sınıf bazlı component stiline dönüştür.
4. Ortak kart, buton, badge, section başlık pattern’lerini standardize et.

Çıktı:

- Daha okunabilir ve ölçeklenebilir CSS mimarisi

Kabul Kriteri:

- Aynı görsel sonuç korunurken CSS bakım maliyeti düşmeli.

## Faz 3 - Ana Sayfa (Hero + Ürün Hikayesi) Yeniden Tasarım
Durum: Planlandı

Adımlar:

1. Hero bölümünü app-first kurguyla güncelle:
   - Güçlü başlık + kısa değer önerisi
   - Birincil CTA (App Store)
   - İkincil CTA (Kullanım rehberi / Özellikler)
2. Mobil uygulama ekran görüntülerini modern bir vitrin bloğuna taşı.
3. "Nasıl çalışır" ve "Neleri hesaplar" bölümlerini netleştir.
4. Güven bloğu ekle (offline çalışma, veri toplamama, açık kaynak).
   Not: Uygulamanın en güçlü avantajı bu — öne çıkarılmalı.
5. Sayfa giriş animasyonlarını hafif ve anlamlı olacak şekilde düzenle.

Çıktı:

- Dönüşüm odaklı modern ana sayfa

Kabul Kriteri:

- İlk ekranda ürün ne işe yarıyor sorusu net cevaplanmalı.

## Faz 4 - İç Sayfalar Standardizasyonu
Durum: Planlandı

Adımlar:

1. About/Uygulama sayfası: FlipCard + Typewriter kaldırıldı, yeni mockup görselleriyle (denklem_appstore_1–6) temiz grid yapısına geçildi. ✓ Tamamlandı
2. Privacy sayfasında görsel tutarlılık + daha iyi okunabilirlik.
3. Blog/Duyuru kart düzenini tek bir ortak kart bileşenine yaklaştır.
4. Placeholder linkleri gerçek rotalarla değiştir.

Çıktı:

- Tüm iç sayfalarda tutarlı görsel dil

Kabul Kriteri:

- Farklı sayfalar aynı ürün ailesinin parçası gibi görünmeli.

## Faz 5 - Çok Dilli Yapı (TR/EN) Refactor
Durum: Planlandı

Adımlar:

1. Ortak içerik sözlüğü (dictionary) veya i18n yardımcı dosyası oluştur.
2. Kopya sayfaları azaltıp ortak bileşenli bir yapı kur.
3. `lang` ve locale metadata yönetimini sayfa bazında netleştir.
4. URL ve navigasyon eşleşmelerini doğrula.

Çıktı:

- Daha az tekrar, daha kolay çeviri yönetimi

Kabul Kriteri:

- Yeni metin eklendiğinde iki dilde güncelleme süresi belirgin şekilde kısalmalı.

## Faz 6 - Erişilebilirlik, SEO ve Performans Son Rötuş
Durum: Planlandı

Adımlar:

1. Klavye erişimi ve focus görünürlüğü denetimi.
2. Semantik başlık sıralaması ve landmark yapısı kontrolü.
3. Structured data (SoftwareApplication) ekleme.
4. Görsel optimizasyonu ve lazy-loading kontrolü.
5. Gereksiz script/stil yükünü azalt.
6. `SoftwareApplication` structured data ekle → App Store sıralamasına katkı sağlar.

Çıktı:

- Teknik kalite yükseltilmiş yayın adayı

Kabul Kriteri:

- Lighthouse ve temel erişilebilirlik kontrollerinde iyileşme görülmeli.

## 6. İş Sırası (Uygulama Sıralaması)
Önerilen uygulama sırası:

1. Faz 1 (İçerik altyapısı)
2. Faz 2 (Stil mimarisi)
3. Faz 3 (Ana sayfa redesign)
4. Faz 4 (İç sayfalar)
5. Faz 5 (i18n refactor)
6. Faz 6 (performans/SEO/a11y)

## 7. Çalışma Prensibi
Her faz için aşağıdaki döngü izlenecek:

1. Uygula
2. Derle/çalıştır kontrolü
3. Görsel ve işlevsel doğrulama
4. Gerekirse küçük düzeltme
5. Sonra bir sonraki faza geç

## 8. Başlangıç İçin İlk Uygulanacak İşler
İlk teknik sprintte şu işleri yapacağız:

1. Content collections kurulumunu tamamlamak
2. Blog/duyuru liste sayfalarını dinamik hale getirmek
3. BlogLayout dosyasını işlevsel hale getirmek
4. Örnek TR/EN içerik dosyalarıyla sistemi doğrulamak

Bu plan onaylandıktan sonra Faz 1 ile kod değişikliklerine başlanacaktır.
