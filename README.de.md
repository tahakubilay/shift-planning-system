<div align="center">

# Schichtplanung & Workforce Management System

### Regelbasierte Personaleinsatzplanung für komplexe kommunale Abläufe

<img src="./assets/hero.svg" alt="Visuelle Projektidentität von Shift Planning" />

<p><a href="./README.md">English</a> · <a href="./README.de.md"><strong>Deutsch</strong></a> · <a href="./README.tr.md">Türkçe</a></p>

<p>
  <a href="https://github.com/tahakubilay"><img src="https://img.shields.io/badge/Taha%20Kubilay-GitHub-181717?style=for-the-badge&logo=github" alt="Taha Kubilay auf GitHub" /></a>
  <a href="https://github.com/tahakubilay/shift-planning-system"><img src="https://img.shields.io/badge/Repository-Shift%20Planning-0A66C2?style=for-the-badge&logo=github" alt="Repository" /></a>
  <a href="https://shift-planning-system-drab.vercel.app/takvim"><img src="https://img.shields.io/badge/Live%20Demo-App%20%C3%B6ffnen-16A34A?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo öffnen" /></a>
</p>

![Last Commit](https://img.shields.io/github/last-commit/tahakubilay/shift-planning-system?style=flat-square)
![Repo Size](https://img.shields.io/github/repo-size/tahakubilay/shift-planning-system?style=flat-square)

</div>

---

## Überblick

Das Schichtplanungs- und Workforce-Management-System ist für operative Umgebungen konzipiert, in denen die Personaleinsatzplanung von vielen miteinander verknüpften Regeln, personellen Einschränkungen und organisatorischen Anforderungen bestimmt wird.

Anstatt Planung als reines Kalenderproblem zu behandeln, modelliert das System sie als Business-Rule- und Constraint-Management-Problem. Personaleinsatzplanung, Validierung, Historie und operative Transparenz werden in einem gemeinsamen Ablauf zusammengeführt.

## Zentrale Herausforderungen

Ein reales Workforce-System muss unter anderem folgende Fragen beantworten:

- Wer ist für eine bestimmte Schicht geeignet?
- Welche personellen und betrieblichen Regeln gelten?
- Welche Zuweisungen stehen im Konflikt mit bestehenden Einschränkungen?
- Wie soll die Arbeitslast verteilt werden?
- Welche historischen Informationen sind für die Planung relevant?
- Wie können Verantwortliche den resultierenden Dienstplan nachvollziehen?

## Planungsablauf

```mermaid
flowchart LR
    P[Personal] --> RULES[Regeln & Einschränkungen]
    AV[Verfügbarkeit] --> RULES
    OPS[Betrieblicher Bedarf] --> RULES
    RULES --> PLAN[Schichtplanung]
    PLAN --> CHECK[Validierung]
    CHECK --> SCHEDULE[Veröffentlichter Plan]
    SCHEDULE --> HISTORY[(Historie)]
    HISTORY --> ANALYTICS[Statistiken & Analysen]
```

## Kernfunktionen

| Funktion | Zweck |
|---|---|
| **Schichtplanung** | Dienstpläne erstellen und verwalten |
| **Constraint Management** | Betriebliche und personelle Einschränkungen berücksichtigen |
| **Personalverwaltung** | Relevanten Mitarbeiterkontext während der Planung bereitstellen |
| **Arbeitslast-Bewertung** | Ausgewogene und fundierte Zuweisungsentscheidungen unterstützen |
| **Historische Nachverfolgung** | Frühere Zuweisungen und operativen Kontext bewahren |
| **Statistiken & Analysen** | Planungshistorie in operative Erkenntnisse umwandeln |
| **Administration** | Planungsworkflows für berechtigte Nutzer zentralisieren |

## Engineering-Fokus

Der Schwerpunkt des Projekts liegt auf der Modellierung einer regelintensiven operativen Domäne, die auch bei wachsender Komplexität verständlich und wartbar bleibt.

Wichtige Engineering-Themen sind:

- Modellierung von Business Rules
- Constraint-aware Scheduling
- Datenkonsistenz
- Validierungsabläufe
- Historische Datensätze
- Reporting und Analytics
- Wartbare Domänenarchitektur
- Administrative Workflow-Gestaltung

## Live Demo

Die bereitgestellte Anwendung kann direkt geöffnet werden:

### **[→ Shift Planning System öffnen](https://shift-planning-system-drab.vercel.app/takvim)**

Die Demo verwendet ausschließlich synthetische Nutzer und synthetische Planungsdaten. Im öffentlichen Deployment sind keine realen kommunalen Personaldaten enthalten.

## Daten & Datenschutz

Dieses Repository und die öffentliche Demo sind bewusst von realen operativen Personaldaten getrennt. Öffentliche Beispiele verwenden synthetische Daten, damit das System ohne Offenlegung privater Datensätze demonstriert werden kann.

---

<div align="center">

### Entwickelt von [Taha Kubilay](https://github.com/tahakubilay)

`Workforce Management` · `Scheduling` · `Business Rules` · `Enterprise Software` · `Analytics`

</div>