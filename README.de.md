<div align="center">

# Schichtplanung & Workforce Management System

### Regelbasierte Personaleinsatzplanung für komplexe kommunale Abläufe

<img src="./assets/hero.svg" alt="Animierter Projektkopf" />

<p><a href="./README.md">English</a> · <a href="./README.de.md"><strong>Deutsch</strong></a> · <a href="./README.tr.md">Türkçe</a></p>

<p>
  <a href="https://github.com/tahakubilay"><img src="https://img.shields.io/badge/Portfolio-Taha%20Kubilay-181717?style=for-the-badge&logo=github" alt="Portfolio" /></a>
  <a href="https://github.com/tahakubilay/shift-planning-system"><img src="https://img.shields.io/badge/Source-Shift%20Planning-0A66C2?style=for-the-badge&logo=github" alt="Repository" /></a>
  <img src="https://img.shields.io/badge/Status-Portfolio%20Build-7C3AED?style=for-the-badge" alt="Status" />
  <a href="https://shift-planning-system-drab.vercel.app/takvim"><img src="https://img.shields.io/badge/Live%20Demo-App%20öffnen-16A34A?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo öffnen" /></a>
</p>

![Last Commit](https://img.shields.io/github/last-commit/tahakubilay/shift-planning-system?style=flat-square)
![Repo Size](https://img.shields.io/github/repo-size/tahakubilay/shift-planning-system?style=flat-square)

</div>

---

## ✨ Auf einen Blick

| | |
|---|---|
| 🏛️ **Kontext** | Komplexe kommunale Personaleinsatzplanung |
| 🗓️ **Problem** | Schichtplanung unter vielen voneinander abhängigen Regeln und Restriktionen |
| 🧠 **Kernaufgabe** | Betriebliche Richtlinien in wartbare Planungslogik übersetzen |
| 📊 **Mehr als Planung** | Historie, Nachverfolgung, Statistiken und operative Transparenz |
| 🔐 **Öffentliche Version** | Ausschließlich synthetische Daten |
| 🚀 **Live Demo** | [Bereitgestellte Planungsoberfläche öffnen](https://shift-planning-system-drab.vercel.app/takvim) |

## 🔎 Warum dieses System existiert

Ein normaler Kalender kann eine Person einer Schicht zuweisen.

Ein echtes Workforce-System muss deutlich schwierigere Fragen beantworten:

- **Wer ist für eine Schicht überhaupt zulässig?**
- **Welche Regeln gelten?**
- **Welche Zuweisungen kollidieren miteinander?**
- **Wie soll die Arbeitslast verteilt werden?**
- **Was ist historisch passiert?**
- **Können Verantwortliche die Planung nachvollziehen?**

Dadurch wird Schichtplanung zu einem **Constraint- und Business-Rule-Problem** statt zu einem einfachen CRUD-Workflow.

## ⚙️ Planungsablauf

```mermaid
flowchart LR
    P[Personal] --> RULES[Regeln & Restriktionen]
    AV[Verfügbarkeit] --> RULES
    OPS[Betrieblicher Bedarf] --> RULES
    RULES --> PLAN[Schichtplanung]
    PLAN --> CHECK[Validierung]
    CHECK --> SCHEDULE[Veröffentlichter Plan]
    SCHEDULE --> HISTORY[(Historie)]
    HISTORY --> ANALYTICS[Statistiken & Analysen]
```

## ⚡ Kernfunktionen

| Funktion | Zweck |
|---|---|
| 🗓️ **Schichtplanung** | Dienstpläne erstellen und verwalten |
| 🧩 **Constraint Handling** | Betriebliche und personelle Einschränkungen anwenden |
| 👥 **Personalverwaltung** | Relevanten Mitarbeiterkontext für Planer verfügbar machen |
| ⚖️ **Arbeitslast-Bewusstsein** | Fairere und fundiertere Zuweisungsentscheidungen unterstützen |
| 🕘 **Historische Nachverfolgung** | Frühere Zuweisungen und operativen Kontext bewahren |
| 📊 **Statistiken** | Planungshistorie in verwertbare Transparenz umwandeln |
| 🧑‍💼 **Administration** | Planungsworkflows für berechtigte Nutzer zentralisieren |

## 🧠 Engineering-Fokus

Der Wert dieses Projekts liegt in der Modellierung einer realen operativen Domäne.

Wichtige Engineering-Themen:

- Modellierung von Business Rules
- Constraint-aware Scheduling
- Datenkonsistenz
- Validierungsabläufe
- Historische Datensätze
- Reporting und Analytics
- Wartbare Domänenarchitektur
- Administrative Workflow-Gestaltung

> [!NOTE]
> Die öffentliche Version ist bewusst von realen kommunalen Personaldaten getrennt. Jede spätere Demo wird ausschließlich **synthetische Nutzer und synthetische Planungsdaten** enthalten.

## 🌐 Live Demo

Die Planungsoberfläche ist bereits deployed und kann direkt geöffnet werden:

### **[→ Shift Planning System öffnen](https://shift-planning-system-drab.vercel.app/takvim)**

Die Live-Route öffnet den Kalender- bzw. Planungsbereich, sodass das Produkt ohne lokales Setup direkt angesehen werden kann.

> [!NOTE]
> Das öffentliche Deployment dient als Portfolio-Demo. Reale kommunale Personaldaten dürfen darüber nicht veröffentlicht werden.

## 🖼️ Live-Produkt-Screenshots

### Demo-Einstieg — Tutorials deaktiviert

[![Sauberer Demo-Einstieg der Schichtplanung](./assets/screenshots/login-clean-desktop.png)](https://shift-planning-system-drab.vercel.app/takvim)

Vor der Aufnahme werden die Tutorial-Overlays deaktiviert, damit die Oberfläche sauber dargestellt wird.

### Desktop — Kalender / Planungsbereich

[![Desktop-Screenshot der Schichtplanung](./assets/screenshots/takvim-desktop.png)](https://shift-planning-system-drab.vercel.app/takvim)

### Mobile — Responsive Ansicht

[![Mobiler Screenshot der Schichtplanung](./assets/screenshots/takvim-mobile.png)](https://shift-planning-system-drab.vercel.app/takvim)

Die Screenshots werden mit Playwright direkt aus der bereitgestellten Vercel-Anwendung erzeugt. Dadurch stammen die Portfolio-Grafiken aus dem tatsächlich laufenden Produkt.

## 🛣️ Projektstatus

- [x] Öffentliche Case-Study-Repository
- [x] Problem-/Lösungsdarstellung
- [x] Architekturübersicht der Planung
- [ ] Bereinigten Quellcode veröffentlichen
- [ ] Tatsächlichen Tech-Stack dokumentieren
- [x] Automatische Live-Screenshots ergänzen
- [ ] Workflow-GIF ergänzen
- [ ] Rule Engine / Domänenmodell dokumentieren
- [x] Öffentliche Portfolio-Demo deployen

## 💡 Warum dieses Projekt wichtig ist

Dieses Projekt zeigt die Fähigkeit, **unübersichtliche, regelintensive operative Anforderungen** in ein strukturiertes Softwaresystem zu überführen.

Es geht dabei über Formulare und Datenbanktabellen hinaus: Die Domäne muss verstanden, Constraints müssen modelliert und die Software so gestaltet werden, dass sie auch bei wachsender Komplexität verständlich bleibt.

---

<div align="center">

### Entwickelt von [Taha Kubilay](https://github.com/tahakubilay)

`Workforce Management` · `Scheduling` · `Business Rules` · `Enterprise Software` · `Analytics`

</div>