/**
 * IT 2030 - Interactive Client Scripts
 * Handles mobile drawer, article reading progress bar, scroll-to-top,
 * active link detection, and User Technology Thoughts / Notes Community Wall
 */

document.addEventListener("DOMContentLoaded", () => {
    // 1. Reading Progress Bar for Articles
    const progressBar = document.querySelector(".reading-progress-bar");
    if (progressBar) {
        window.addEventListener("scroll", () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
            progressBar.style.width = `${progress}%`;
        });
    }

    // 2. Mobile Navigation Toggle
    const mobileToggle = document.querySelector(".mobile-toggle");
    const navMenu = document.querySelector(".nav-menu");

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener("click", () => {
            const isOpen = navMenu.classList.toggle("open");
            mobileToggle.setAttribute("aria-expanded", isOpen);
        });

        document.addEventListener("click", (e) => {
            if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
                navMenu.classList.remove("open");
            }
        });

        navMenu.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("open");
            });
        });
    }

    // 3. Scroll to Top Floating Button
    const scrollTopBtn = document.querySelector(".scroll-top-btn");
    if (scrollTopBtn) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 350) {
                scrollTopBtn.classList.add("visible");
            } else {
                scrollTopBtn.classList.remove("visible");
            }
        });

        scrollTopBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // 4. Smooth Anchor Link Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            const targetId = this.getAttribute("href");
            if (targetId && targetId !== "#") {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    const navHeight = document.querySelector(".navbar")?.offsetHeight || 70;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - (navHeight + 20);

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }
            }
        });
    });

    // 5. Active Navigation Link Detection
    const currentPath = window.location.pathname.toLowerCase();
    const navLinks = document.querySelectorAll(".nav-menu a");

    navLinks.forEach(link => {
        const href = link.getAttribute("href")?.toLowerCase();
        if (!href) return;
        const currentFile = currentPath.split("/").pop() || "index.html";
        const linkFile = href.split("/").pop();

        if (currentFile === linkFile || (currentFile === "" && linkFile === "index.html")) {
            link.classList.add("active");
        }
    });

    // 6. Interactive User Technology Thoughts & Notes Manager
    initTechNotesManager();
});

/**
 * Manages the User Technology Notes & Thoughts Section
 */
function initTechNotesManager() {
    const notesForm = document.getElementById("techNotesForm");
    const notesGrid = document.getElementById("notesGrid");
    const filterTabs = document.querySelectorAll(".filter-tab");
    const starterChips = document.querySelectorAll(".starter-chip");
    const thoughtInput = document.getElementById("noteContent");

    // Starter Default Notes
    const defaultNotes = [
        {
            id: "note-1",
            author: "Arun Kumar",
            role: "CS Engineering Student, Chennai",
            category: "ai-evolution",
            categoryLabel: "AI & Evolution",
            content: "In 2030, writing code won't be about memorizing syntax, but mastering the art of framing complex problems. AI is our partner, not our replacement!",
            reactions: { bulb: 24, heart: 18, rocket: 32 },
            timestamp: "Today",
            isUser: false
        },
        {
            id: "note-2",
            author: "Priya Sundaram",
            role: "Full-Stack Developer, OMR",
            category: "chennai-tech",
            categoryLabel: "Chennai Tech",
            content: "Walking down OMR outside Tidel Park, you realize how many families and businesses depend on tech workers. Developers are the silent heartbeat of this city.",
            reactions: { bulb: 19, heart: 27, rocket: 15 },
            timestamp: "Yesterday",
            isUser: false
        },
        {
            id: "note-3",
            author: "Dr. K. Raghavan",
            role: "Professor of Computer Science",
            category: "future-skills",
            categoryLabel: "Future Skills",
            content: "My advice to students: Learn discrete mathematics and system architecture. Tools and AI models change every 6 months, but core logic is eternal.",
            reactions: { bulb: 42, heart: 35, rocket: 29 },
            timestamp: "2 days ago",
            isUser: false
        },
        {
            id: "note-4",
            author: "Deepak S.",
            role: "DevOps & Cloud Engineer",
            category: "ai-evolution",
            categoryLabel: "AI & Evolution",
            content: "Instead of fearing automation, I automated 40% of my repetitive CI/CD scripts with AI and used that freed time to learn Kubernetes edge security.",
            reactions: { bulb: 15, heart: 12, rocket: 21 },
            timestamp: "3 days ago",
            isUser: false
        }
    ];

    // Load from localStorage or initialize with defaults
    let storedNotes = [];
    try {
        const localData = localStorage.getItem("it2030_tech_notes");
        if (localData) {
            storedNotes = JSON.parse(localData);
        }
    } catch (e) {
        console.warn("Could not read from localStorage", e);
    }

    let allNotes = [...storedNotes, ...defaultNotes];
    let currentFilter = "all";

    // Starter Prompt click helper
    if (starterChips && thoughtInput) {
        starterChips.forEach(chip => {
            chip.addEventListener("click", () => {
                const promptText = chip.getAttribute("data-prompt");
                if (promptText) {
                    thoughtInput.value = promptText;
                    thoughtInput.focus();
                }
            });
        });
    }

    // Render notes into the grid
    function renderNotes() {
        if (!notesGrid) return;
        notesGrid.innerHTML = "";

        const filtered = allNotes.filter(note => {
            if (currentFilter === "all") return true;
            return note.category === currentFilter;
        });

        if (filtered.length === 0) {
            notesGrid.innerHTML = `
                <div style="grid-column: 1/-1; text-align: center; padding: 40px; background: #f8fafc; border-radius: 18px; border: 1px dashed #cbd5e1;">
                    <p style="color: #64748b; font-size: 16px;">No thoughts found in this category yet. Be the first to share your thoughts!</p>
                </div>
            `;
            return;
        }

        filtered.forEach(note => {
            const card = document.createElement("div");
            card.className = "note-card";
            card.setAttribute("data-id", note.id);

            const initials = note.author.split(" ").map(n => n[0]).join("").substring(0, 2).toUpperCase();

            card.innerHTML = `
                <div class="note-card-top">
                    <div class="note-header">
                        <div class="note-author-info">
                            <div class="note-avatar">${initials}</div>
                            <div>
                                <div class="note-author-name">${escapeHtml(note.author)}</div>
                                <div class="note-author-role">${escapeHtml(note.role)} • ${note.timestamp}</div>
                            </div>
                        </div>
                        <span class="note-category-badge">${escapeHtml(note.categoryLabel)}</span>
                    </div>
                    <p class="note-content">“${escapeHtml(note.content)}”</p>
                </div>

                <div class="note-actions">
                    <div class="note-reactions">
                        <button class="reaction-btn" data-reaction="bulb" title="Inspiring idea">
                            💡 <span>${note.reactions.bulb}</span>
                        </button>
                        <button class="reaction-btn" data-reaction="heart" title="I agree">
                            ❤️ <span>${note.reactions.heart}</span>
                        </button>
                        <button class="reaction-btn" data-reaction="rocket" title="Future ready">
                            🚀 <span>${note.reactions.rocket}</span>
                        </button>
                    </div>
                    <button class="copy-thought-btn" title="Copy thought text">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                        Copy
                    </button>
                </div>
            `;

            // Reaction Click Handlers
            card.querySelectorAll(".reaction-btn").forEach(btn => {
                btn.addEventListener("click", () => {
                    const reactionType = btn.getAttribute("data-reaction");
                    note.reactions[reactionType]++;
                    btn.querySelector("span").textContent = note.reactions[reactionType];
                    btn.classList.add("liked");
                    saveCustomNotes();
                });
            });

            // Copy Thought Handler
            const copyBtn = card.querySelector(".copy-thought-btn");
            copyBtn.addEventListener("click", () => {
                navigator.clipboard.writeText(`"${note.content}" — ${note.author} (${note.role})`).then(() => {
                    copyBtn.innerHTML = `✓ Copied!`;
                    setTimeout(() => {
                        copyBtn.innerHTML = `
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                            Copy
                        `;
                    }, 2000);
                });
            });

            notesGrid.appendChild(card);
        });
    }

    // Filter tabs
    if (filterTabs) {
        filterTabs.forEach(tab => {
            tab.addEventListener("click", () => {
                filterTabs.forEach(t => t.classList.remove("active"));
                tab.classList.add("active");
                currentFilter = tab.getAttribute("data-category");
                renderNotes();
            });
        });
    }

    // Handle Form Submission
    if (notesForm) {
        notesForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const authorInput = document.getElementById("noteAuthor");
            const roleInput = document.getElementById("noteRole");
            const categorySelect = document.getElementById("noteCategory");
            const contentInput = document.getElementById("noteContent");

            const author = authorInput?.value.trim();
            const role = roleInput?.value.trim() || "Technology Enthusiast";
            const category = categorySelect?.value || "ai-evolution";
            const content = contentInput?.value.trim();

            if (!author || !content) {
                alert("Please enter your name and share your technology thoughts.");
                return;
            }

            const categoryLabels = {
                "ai-evolution": "AI & Evolution",
                "chennai-tech": "Chennai Tech",
                "future-skills": "Future Skills",
                "student-advice": "Student Advice"
            };

            const newNote = {
                id: "user-note-" + Date.now(),
                author: author,
                role: role,
                category: category,
                categoryLabel: categoryLabels[category] || "Technology Thought",
                content: content,
                reactions: { bulb: 1, heart: 1, rocket: 1 },
                timestamp: "Just now",
                isUser: true
            };

            // Prepend to array
            allNotes.unshift(newNote);
            storedNotes.unshift(newNote);
            saveCustomNotes();

            // Reset form
            authorInput.value = "";
            roleInput.value = "";
            contentInput.value = "";

            renderNotes();

            // Scroll gently to the top of the notes grid
            notesGrid.scrollIntoView({ behavior: "smooth", block: "nearest" });
        });
    }

    function saveCustomNotes() {
        try {
            const userOnly = allNotes.filter(n => n.isUser);
            localStorage.setItem("it2030_tech_notes", JSON.stringify(userOnly));
        } catch (e) {
            console.warn("Could not write to localStorage", e);
        }
    }

    function escapeHtml(str) {
        if (!str) return "";
        return str
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    // Initial render
    renderNotes();
}
