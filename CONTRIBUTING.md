
# Contributing to The Manifesto for Agentic Automation

Thank you for your interest in the Manifesto for Agentic Automation. This document is a living standard, and we welcome contributions from the community to help refine, correct, and evolve the principles of AI Agents.

To maintain the integrity of the current version while allowing for future evolution, please follow the guidelines below regarding where to apply your changes.

## 1. Categorize Your Contribution

Before opening a Pull Request, please determine if your change is **Minor** or **Major**.

### 🔹 Minor Fixes (Typos, Grammar, Formatting)
If you are fixing spelling errors, punctuation, broken links, or formatting issues that **do not change the semantic meaning** of the manifesto:

*   **Target File:** The current active version (e.g., `/v1/MANIFESTO.md`).
*   **Goal:** To polish the existing release without altering its core tenets.

### 🔹 Major Changes (New Ideas, rewrites, Philosophy)
If you are proposing a new principle, removing a section, changing the tone, or significantly altering the meaning of the text:

*   **Target File:** The draft file (`/draft/MANIFESTO.md`).
*   **Goal:** To stage ideas for the *next* version.
*   **Process:** We collect and debate major changes in the `draft` folder. Once enough changes are consolidated and approved, the maintainers will cut a new version release (e.g., moving `draft` content to `/v2/MANIFESTO.md`).

### 🔹 Don’t have time for a PR?
No problem at all! Just drop an issue if you have feedback, a principle to suggest, an objection, a use-case, or anything you think should be included:

* https://github.com/cabincrew-dev/ai-agent-manifesto/issues/new


---

## 2. Pull Request Guidelines

1.  **Fork the Repository:** Create a fork of the repo to your own GitHub account.
2.  **Create a Branch:** Please give your branch a descriptive name.
    *   For fixes: `fix/typo-in-intro`
    *   For drafts: `proposal/add-safety-principle`
3.  **Make Changes:** Edit the correct file based on the category above.
4.  **Submit PR:** Open a Pull Request against the `main` branch.

### PR Title Convention
Please use semantic titles for your PRs:
*   `fix: Correct typo in section 3 (v1)`
*   `feat: Draft proposal for new autonomy clause`
*   `docs: Update README`

---

## 3. The Release Cycle

*   **Current Stable:** The numbered folders (e.g., `/v1/`) represent immutable, released versions of the manifesto. We only touch these for errata/typos.
*   **The Draft:** The `/draft/` folder is our "working directory" for the future. This is where the debate happens.
*   **Versioning:** When the community reaches a consensus on the content within `/draft/`, the maintainers will freeze the text, create a new version folder (e.g., `/v2/`), and publish the update.

## 4. Code of Conduct

Please keep discussions respectful. We are building a standard for the future of AI, and diverse viewpoints are welcome, provided they are communicated constructively.

Thank you for helping define the future of AI Agents!