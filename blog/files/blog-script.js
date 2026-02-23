        // Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileNav = document.getElementById('mobileNav');

        if (mobileMenuBtn && mobileNav) {
            mobileMenuBtn.addEventListener('click', () => {
                mobileNav.classList.toggle('active');
                mobileMenuBtn.innerHTML = mobileNav.classList.contains('active')
                    ? '<i class="fas fa-times"></i>'
                    : '<i class="fas fa-bars"></i>';
            });

            document.querySelectorAll('#mobileNav a').forEach(link => {
                link.addEventListener('click', () => {
                    mobileNav.classList.remove('active');
                    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                });
            });
        }

        // Blog Posts Data with unique file names and search relevance
        const blogPosts = [
            {
                id: 1,
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                category: "Resume Writing",
                categoryClass: "resume",
                title: "7 Resume Mistakes That Are Costing You Interviews",
                excerpt: "Discover the most common resume errors that recruiters spot immediately and learn how to fix them to get more interview calls.",
                date: "January 15, 2026",
                tags: ["resume", "cv", "mistakes", "errors", "interview", "job search", "career"],
                searchPriority: 10,
                fileName: "blog/7-resume-mistakes.html"
            },
            {
                id: 2,
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                category: "LinkedIn Optimization",
                categoryClass: "linkedin",
                title: "How to Optimize Your LinkedIn Profile for Recruiters",
                excerpt: "Transform your LinkedIn profile into a job magnet with these proven strategies that make recruiters reach out to you.",
                date: "December 22, 2025",
                tags: ["linkedin", "social media", "recruiter", "profile", "optimization"],
                searchPriority: 8,
                fileName: "blog/linkedin-profile-optimization.html"
            },
            {
                id: 3,
                image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                category: "Interview Tips",
                categoryClass: "interview",
                title: "Answering 'Tell Me About Yourself' Like a Pro",
                excerpt: "Master the most common interview question with our structured approach that showcases your value in just 2 minutes.",
                date: "January 8, 2026",
                tags: ["interview", "questions", "preparation", "skills", "tell me about yourself"],
                searchPriority: 9,
                fileName: "blog/tell-me-about-yourself-interview.html"
            },
            {
                id: 4,
                image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                category: "Job Search Strategy",
                categoryClass: "",
                title: "The Hidden Job Market: How to Find Unadvertised Roles",
                excerpt: "Learn how to tap into the 70% of jobs that are never advertised publicly and gain a competitive advantage.",
                date: "November 15, 2025",
                tags: ["job search", "strategy", "hidden jobs", "networking", "unadvertised"],
                searchPriority: 7,
                fileName: "blog/hidden-job-market.html"
            },
            {
                id: 5,
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                category: "Career Transition",
                categoryClass: "",
                title: "How to Successfully Change Careers in Your 30s and 40s",
                excerpt: "A step-by-step guide to transitioning to a new industry without starting from scratch.",
                date: "October 13, 2025",
                tags: ["career change", "transition", "mid-career", "skills", "30s", "40s"],
                searchPriority: 6,
                fileName: "blog/career-change-30s-40s.html"
            },
            {
                id: 6,
                image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                category: "Negotiation",
                categoryClass: "",
                title: "Salary Negotiation: How to Get Paid What You're Worth",
                excerpt: "Learn the art of negotiation and increase your starting salary by 15-30% with these proven techniques.",
                date: "December 11, 2025",
                tags: ["salary", "negotiation", "compensation", "money", "pay", "raise"],
                searchPriority: 8,
                fileName: "blog/salary-negotiation-tips.html"
            },
            {
                id: 7,
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                category: "Resume Writing",
                categoryClass: "resume",
                title: "ATS-Friendly Resumes: Beat the Bots in 2026",
                excerpt: "Learn how to optimize your resume for Applicant Tracking Systems used by 95% of Fortune 500 companies.",
                date: "January 2, 2026",
                tags: ["ats", "resume", "applicant tracking", "technology", "bots", "optimize"],
                searchPriority: 9,
                fileName: "blog/ats-friendly-resumes.html"
            },
            {
                id: 8,
                image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                category: "Interview Tips",
                categoryClass: "interview",
                title: "Behavioral Interview Questions: The STAR Method Explained",
                excerpt: "Master the STAR technique to answer behavioral questions confidently and impress hiring managers.",
                date: "November 28, 2025",
                tags: ["star method", "behavioral", "interview", "questions", "technique"],
                searchPriority: 8,
                fileName: "blog/star-method-interview.html"
            },
            {
                id: 9,
                image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                category: "Networking",
                categoryClass: "networking",
                title: "Effective Networking Strategies for Introverts",
                excerpt: "Discover comfortable ways to build professional relationships without feeling overwhelmed or inauthentic.",
                date: "September 29, 2025",
                tags: ["networking", "introverts", "relationships", "professional", "social"],
                searchPriority: 6,
                fileName: "blog/networking-for-introverts.html"
            },
            {
                id: 10,
                image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                category: "Career Development",
                categoryClass: "",
                title: "5 Skills That Will Future-Proof Your Career",
                excerpt: "Discover the essential skills you need to develop to stay relevant in the rapidly changing job market.",
                date: "November 7, 2025",
                tags: ["skills", "future", "career development", "learning", "growth"],
                searchPriority: 7,
                fileName: "blog/future-proof-career-skills.html"
            },
            {
                id: 11,
                image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                category: "Job Search Strategy",
                categoryClass: "",
                title: "How to Create a 30-60-90 Day Plan for Interviews",
                excerpt: "Learn how to impress hiring managers with a concrete plan for your first 90 days on the job.",
                date: "September 18, 2025",
                tags: ["plan", "interview", "strategy", "preparation", "30-60-90"],
                searchPriority: 6,
                fileName: "blog/30-60-90-day-plan.html"
            },
            {
                id: 12,
                image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                category: "Interview Tips",
                categoryClass: "interview",
                title: "Virtual Interview Success: Tips for Video Call Interviews",
                excerpt: "Master the art of virtual interviews with these essential tips for lighting, background, and communication.",
                date: "October 26, 2025",
                tags: ["virtual", "video", "interview", "remote", "online", "zoom"],
                searchPriority: 7,
                fileName: "blog/virtual-interview-tips.html"
            },
            {
                id: 13,
                image: "../../../../assets/images/9-career-options-after-ba.jpg",
                category: "Career Development",
                categoryClass: "",
                title: "9 Career Options After B.A. (Bachelor of Arts)",
                excerpt: "Key Job Opportunities After B.A..",
                date: "February 23, 2026",
                tags: ["graduate", "Bachelor of Arts", "Jobs after Graduation", "career options"],
                searchPriority: 7,
                fileName: "blog/9-career-options-after-ba.html"
            }
        ];

        // DOM Elements
        const blogGrid = document.getElementById('blogGrid');
        const loadMoreBtn = document.getElementById('loadMoreBtn');
        const searchInput = document.getElementById('searchInput');
        const autocompleteDropdown = document.getElementById('autocompleteDropdown');
        const searchResultsInfo = document.getElementById('searchResultsInfo');

        // State
        let displayedPosts = 6;
        let currentSearchTerm = '';
        let currentFilteredPosts = [];

        // Debounce function for search
        function debounce(func, wait) {
            let timeout;
            return function executedFunction(...args) {
                const later = () => {
                    clearTimeout(timeout);
                    func(...args);
                };
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
            };
        }

        // Initialize
        function init() {
            // Sort by search priority (highest first) and then by date (newest first)
            currentFilteredPosts = [...blogPosts].sort((a, b) => {
                if (b.searchPriority !== a.searchPriority) {
                    return b.searchPriority - a.searchPriority;
                }
                return new Date(b.date) - new Date(a.date);
            });
            renderBlogGrid(currentFilteredPosts.slice(0, displayedPosts));
            updateResultsInfo(currentFilteredPosts.length);
            
            // Show load more button only if there are more posts
            loadMoreBtn.style.display = currentFilteredPosts.length > displayedPosts ? 'block' : 'none';
        }

        // Render blog grid
        function renderBlogGrid(posts) {
            blogGrid.innerHTML = '';
            
            if (posts.length === 0) {
                blogGrid.innerHTML = `
                    <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
                        <i class="fas fa-search" style="font-size: 48px; color: var(--gray-light); margin-bottom: 20px;"></i>
                        <h3 style="color: var(--gray); margin-bottom: 10px;">No articles found</h3>
                        <p style="color: var(--gray);">Try adjusting your search terms or browse our popular topics</p>
                    </div>
                `;
                return;
            }
            
            posts.forEach(post => {
                const blogCard = document.createElement('a');
                blogCard.className = 'blog-card';
                blogCard.href = post.fileName;
                
                blogCard.innerHTML = `
                    <img src="${post.image}" alt="${post.title}" class="blog-card-img">
                    <div class="blog-card-content">
                        <span class="blog-category ${post.categoryClass}">${post.category}</span>
                        <h3>${post.title}</h3>
                        <p>${post.excerpt}</p>
                        <div class="blog-meta">
                            <span class="blog-date">${post.date}</span>
                            <span class="blog-read-more">Read More →</span>
                        </div>
                    </div>
                `;
                
                blogGrid.appendChild(blogCard);
            });
        }

        // Calculate search relevance score
        function calculateRelevanceScore(post, searchTerm) {
            let score = 0;
            const term = searchTerm.toLowerCase();
            
            // Title match (highest priority)
            if (post.title.toLowerCase().includes(term)) {
                score += 10;
            }
            
            // Category match
            if (post.category.toLowerCase().includes(term)) {
                score += 8;
            }
            
            // Excerpt match
            if (post.excerpt.toLowerCase().includes(term)) {
                score += 5;
            }
            
            // Tags match
            const tagMatches = post.tags.filter(tag => tag.toLowerCase().includes(term)).length;
            score += tagMatches * 3;
            
            // Exact matches get bonus
            if (post.title.toLowerCase() === term || 
                post.category.toLowerCase() === term || 
                post.tags.some(tag => tag.toLowerCase() === term)) {
                score += 5;
            }
            
            return score;
        }

        // Filter and sort posts based on search term
        function filterPosts(searchTerm) {
            if (!searchTerm.trim()) {
                // Return sorted by priority and date when no search term
                return [...blogPosts].sort((a, b) => {
                    if (b.searchPriority !== a.searchPriority) {
                        return b.searchPriority - a.searchPriority;
                    }
                    return new Date(b.date) - new Date(a.date);
                });
            }
            
            const term = searchTerm.toLowerCase();
            const filtered = blogPosts.filter(post => {
                return (
                    post.title.toLowerCase().includes(term) ||
                    post.category.toLowerCase().includes(term) ||
                    post.excerpt.toLowerCase().includes(term) ||
                    post.tags.some(tag => tag.toLowerCase().includes(term))
                );
            });
            
            // Sort by relevance score and date
            return filtered.sort((a, b) => {
                const scoreA = calculateRelevanceScore(a, term);
                const scoreB = calculateRelevanceScore(b, term);
                
                if (scoreB !== scoreA) {
                    return scoreB - scoreA; // Higher score first
                }
                
                // If scores are equal, sort by date (newest first)
                return new Date(b.date) - new Date(a.date);
            });
        }

        // Update results info
        function updateResultsInfo(totalPosts) {
            const showing = Math.min(displayedPosts, totalPosts);
            searchResultsInfo.innerHTML = `Showing <strong>${showing}</strong> of <strong>${totalPosts}</strong> articles`;
            
            if (currentSearchTerm) {
                searchResultsInfo.innerHTML += ` for "<strong>${currentSearchTerm}</strong>"`;
            }
        }

        // Show auto-complete suggestions
        function showAutocompleteSuggestions(searchTerm) {
            autocompleteDropdown.innerHTML = '';
            
            if (!searchTerm.trim()) {
                autocompleteDropdown.style.display = 'none';
                return;
            }
            
            const suggestions = filterPosts(searchTerm).slice(0, 5);
            
            if (suggestions.length === 0) {
                autocompleteDropdown.innerHTML = '<div class="no-results">No matching articles found</div>';
                autocompleteDropdown.style.display = 'block';
                return;
            }
            
            suggestions.forEach((post, index) => {
                const item = document.createElement('div');
                item.className = 'autocomplete-item';
                item.dataset.index = index;
                
                item.innerHTML = `
                    <div class="autocomplete-icon">
                        <i class="fas fa-file-alt"></i>
                    </div>
                    <div>
                        <div class="autocomplete-title">${post.title}</div>
                        <div class="autocomplete-category">${post.category}</div>
                    </div>
                `;
                
                item.addEventListener('click', () => {
                    // Redirect to the specific blog post page
                    window.location.href = post.fileName;
                });
                
                autocompleteDropdown.appendChild(item);
            });
            
            autocompleteDropdown.style.display = 'block';
        }

        // Perform search
        function performSearch(searchTerm) {
            currentSearchTerm = searchTerm;
            currentFilteredPosts = filterPosts(searchTerm);
            
            if (searchTerm.trim()) {
                // When searching, show all filtered results
                displayedPosts = currentFilteredPosts.length;
                loadMoreBtn.style.display = 'none';
            } else {
                // When no search, show limited results with load more
                displayedPosts = 6;
                loadMoreBtn.style.display = currentFilteredPosts.length > displayedPosts ? 'block' : 'none';
            }
            
            renderBlogGrid(currentFilteredPosts.slice(0, displayedPosts));
            updateResultsInfo(currentFilteredPosts.length);
        }

        // Event Listeners
        if (searchInput) {
            // Input event for auto-complete
            searchInput.addEventListener('input', (e) => {
                const term = e.target.value;
                showAutocompleteSuggestions(term);
                
                // Use debounced search for grid update
                debouncedSearch(term);
            });
            
            // Focus event
            searchInput.addEventListener('focus', () => {
                if (searchInput.value.trim()) {
                    showAutocompleteSuggestions(searchInput.value);
                }
            });
            
            // Keyboard navigation in auto-complete
            searchInput.addEventListener('keydown', (e) => {
                const items = autocompleteDropdown.querySelectorAll('.autocomplete-item');
                const activeItem = autocompleteDropdown.querySelector('.autocomplete-item.active');
                let activeIndex = activeItem ? parseInt(activeItem.dataset.index) : -1;
                
                if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    if (items.length > 0) {
                        if (activeItem) activeItem.classList.remove('active');
                        activeIndex = (activeIndex + 1) % items.length;
                        items[activeIndex].classList.add('active');
                    }
                } else if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    if (items.length > 0) {
                        if (activeItem) activeItem.classList.remove('active');
                        activeIndex = activeIndex <= 0 ? items.length - 1 : activeIndex - 1;
                        items[activeIndex].classList.add('active');
                    }
                } else if (e.key === 'Enter') {
                    if (activeItem) {
                        e.preventDefault();
                        const post = currentFilteredPosts[activeIndex];
                        window.location.href = post.fileName;
                    } else if (searchInput.value.trim()) {
                        performSearch(searchInput.value);
                        autocompleteDropdown.style.display = 'none';
                    }
                } else if (e.key === 'Escape') {
                    autocompleteDropdown.style.display = 'none';
                }
            });
        }

        // Click outside to close auto-complete
        document.addEventListener('click', (e) => {
            if (!searchInput.contains(e.target) && !autocompleteDropdown.contains(e.target)) {
                autocompleteDropdown.style.display = 'none';
            }
        });

        // Load more functionality
        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', () => {
                displayedPosts += 3;
                renderBlogGrid(currentFilteredPosts.slice(0, displayedPosts));
                updateResultsInfo(currentFilteredPosts.length);
                
                if (displayedPosts >= currentFilteredPosts.length) {
                    loadMoreBtn.style.display = 'none';
                }
            });
        }

        // Debounced search function
        const debouncedSearch = debounce((term) => {
            performSearch(term);
        }, 300);

        // Popular search terms
        const popularSearches = [
            { term: "resume", icon: "fa-file-alt" },
            { term: "interview", icon: "fa-comments" },
            { term: "linkedin", icon: "fa-linkedin" },
            { term: "salary", icon: "fa-money-bill" },
            { term: "career change", icon: "fa-exchange-alt" }
        ];
        
        // Add popular search chips
        function addPopularSearches() {
            const searchContainer = document.querySelector('.search-container');
            const popularContainer = document.createElement('div');
            popularContainer.className = 'popular-searches';
            popularContainer.style.marginTop = '15px';
            popularContainer.style.display = 'flex';
            popularContainer.style.flexWrap = 'wrap';
            popularContainer.style.gap = '8px';
            popularContainer.style.justifyContent = 'center';
            
            popularSearches.forEach(item => {
                const chip = document.createElement('span');
                chip.innerHTML = `<i class="fas ${item.icon}"></i> ${item.term}`;
                chip.style.cursor = 'pointer';
                chip.style.padding = '6px 12px';
                chip.style.backgroundColor = 'rgba(124, 58, 237, 0.1)';
                chip.style.color = 'var(--primary)';
                chip.style.borderRadius = '20px';
                chip.style.fontSize = '14px';
                chip.style.transition = 'all 0.3s';
                chip.style.display = 'flex';
                chip.style.alignItems = 'center';
                chip.style.gap = '5px';
                
                chip.addEventListener('mouseenter', () => {
                    chip.style.backgroundColor = 'var(--primary)';
                    chip.style.color = 'white';
                });
                
                chip.addEventListener('mouseleave', () => {
                    chip.style.backgroundColor = 'rgba(124, 58, 237, 0.1)';
                    chip.style.color = 'var(--primary)';
                });
                
                chip.addEventListener('click', () => {
                    searchInput.value = item.term;
                    performSearch(item.term);
                    showAutocompleteSuggestions(item.term);
                });
                
                popularContainer.appendChild(chip);
            });
            
            searchContainer.appendChild(popularContainer);
        }

        // Initialize everything
        window.addEventListener('DOMContentLoaded', () => {
            init();
            addPopularSearches();
            
            // Smooth Scroll for Navigation
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', e => {
                    const target = document.querySelector(anchor.getAttribute('href'));
                    if (!target) return;
                    e.preventDefault();
                    window.scrollTo({
                        top: target.offsetTop - 90,
                        behavior: 'smooth'
                    });
                });
            });
            
            // Check for URL search parameter
            const urlParams = new URLSearchParams(window.location.search);
            const searchParam = urlParams.get('search');
            if (searchParam) {
                searchInput.value = searchParam;
                performSearch(searchParam);
                showAutocompleteSuggestions(searchParam);
            }

        });
