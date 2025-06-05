// Ultra-Enhanced JavaScript for Kids Website with Perfect Responsiveness
class WordlyKidsApp {
  constructor() {
    this.isMobile = window.innerWidth <= 768
    this.isTouch = "ontouchstart" in window
    this.init()
    this.setupTheme()
    this.setupProgressBar()
    this.setupIntersectionObserver()
    this.setupAdvancedSearch()
    this.setupKeyboardNavigation()
    this.setupPerformanceOptimizations()
    this.setupKidFriendlyFeatures()
  }

  init() {
    document.addEventListener("DOMContentLoaded", () => {
      this.setupHeader()
      this.setupNavigation()
      this.setupStoryInteractions()
      this.setupPreloader()
      this.setupBackToTop()
      this.setupPoemInteractions()
      this.setupNotifications()
      this.setupAnimations()
      this.setupAccessibility()
      this.setupResponsiveHelpers()
    })

    window.addEventListener("load", () => {
      this.hidePreloader()
      this.startPerformanceMonitoring()
    })

    window.addEventListener("resize", () => {
      this.handleResize()
    })
  }

  // Kid-Friendly Features
  setupKidFriendlyFeatures() {
    this.setupSoundEffects()
    this.setupHapticFeedback()
    this.setupColorfulInteractions()
    this.setupEncouragement()
  }

  setupSoundEffects() {
    // Create audio context for kid-friendly sounds
    try {
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)()
    } catch (e) {
      console.log("Audio context not supported")
    }
  }

  playKidSound(type = "click") {
    if (!this.audioContext) return

    const oscillator = this.audioContext.createOscillator()
    const gainNode = this.audioContext.createGain()

    oscillator.connect(gainNode)
    gainNode.connect(this.audioContext.destination)

    const sounds = {
      click: { freq: 800, duration: 0.1 },
      success: { freq: 1000, duration: 0.2 },
      hover: { freq: 600, duration: 0.05 },
      error: { freq: 300, duration: 0.3 },
    }

    const sound = sounds[type] || sounds.click

    oscillator.frequency.setValueAtTime(sound.freq, this.audioContext.currentTime)
    gainNode.gain.setValueAtTime(0.1, this.audioContext.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + sound.duration)

    oscillator.start(this.audioContext.currentTime)
    oscillator.stop(this.audioContext.currentTime + sound.duration)
  }

  setupHapticFeedback() {
    // Add haptic feedback for touch devices
    if ("vibrate" in navigator) {
      this.hapticFeedback = (pattern = [10]) => {
        navigator.vibrate(pattern)
      }
    } else {
      this.hapticFeedback = () => {} // No-op for non-supporting devices
    }
  }

  setupColorfulInteractions() {
    // Add rainbow hover effects for kid-friendly elements
    const kidElements = document.querySelectorAll(".story-card, .cta-button, .filter-btn")

    kidElements.forEach((element) => {
      element.addEventListener("mouseenter", () => {
        if (!this.isMobile) {
          this.playKidSound("hover")
        }
      })

      element.addEventListener("click", () => {
        this.playKidSound("click")
        this.hapticFeedback([10])
        this.addSparkleEffect(element)
      })
    })
  }

  addSparkleEffect(element) {
    const sparkle = document.createElement("div")
    sparkle.className = "sparkle-effect"
    sparkle.innerHTML = "✨"
    sparkle.style.cssText = `
      position: absolute;
      pointer-events: none;
      font-size: 1.5rem;
      animation: sparkle 1s ease-out forwards;
      z-index: 1000;
    `

    const rect = element.getBoundingClientRect()
    sparkle.style.left = rect.left + Math.random() * rect.width + "px"
    sparkle.style.top = rect.top + Math.random() * rect.height + "px"

    document.body.appendChild(sparkle)

    setTimeout(() => {
      if (document.body.contains(sparkle)) {
        document.body.removeChild(sparkle)
      }
    }, 1000)
  }

  setupEncouragement() {
    const encouragements = [
      "Great choice! 🌟",
      "You're doing amazing! 🎉",
      "Keep exploring! 📚",
      "Wonderful! ✨",
      "You're so smart! 🧠",
      "Fantastic reading! 🎊",
    ]

    this.getRandomEncouragement = () => {
      return encouragements[Math.floor(Math.random() * encouragements.length)]
    }
  }

  // Theme Management - Kid-Friendly
  setupTheme() {
    const themeToggle = this.createThemeToggle()
    const savedTheme = localStorage.getItem("wordly-theme") || "light"
    document.documentElement.setAttribute("data-theme", savedTheme)
    this.updateThemeToggle(themeToggle, savedTheme)
  }

  createThemeToggle() {
    const themeToggle = document.createElement("button")
    themeToggle.className = "theme-toggle"
    themeToggle.setAttribute("aria-label", "Toggle theme")
    themeToggle.innerHTML = "🌙"

    const navContainer = document.querySelector(".nav-container")
    if (!navContainer) {
      const nav = document.querySelector("nav")
      if (nav) {
        const container = document.createElement("div")
        container.className = "nav-container"
        nav.parentNode.insertBefore(container, nav)
        container.appendChild(nav)
        container.appendChild(themeToggle)
      }
    } else {
      navContainer.appendChild(themeToggle)
    }

    themeToggle.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme")
      const newTheme = currentTheme === "dark" ? "light" : "dark"

      document.documentElement.setAttribute("data-theme", newTheme)
      localStorage.setItem("wordly-theme", newTheme)
      this.updateThemeToggle(themeToggle, newTheme)

      this.playKidSound("success")
      this.showNotification(`Switched to ${newTheme} mode! ✨`, "success")
    })

    return themeToggle
  }

  updateThemeToggle(toggle, theme) {
    toggle.innerHTML = theme === "dark" ? "☀️" : "🌙"
  }

  // Progress Bar
  setupProgressBar() {
    const progressBar = document.createElement("div")
    progressBar.className = "reading-progress"
    document.body.appendChild(progressBar)

    let ticking = false

    const updateProgress = () => {
      const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      progressBar.style.width = `${Math.min(scrolled, 100)}%`
      ticking = false
    }

    window.addEventListener("scroll", () => {
      if (!ticking) {
        requestAnimationFrame(updateProgress)
        ticking = true
      }
    })
  }

  // Enhanced Header - Responsive
  setupHeader() {
    const header = document.querySelector("header")
    if (!header) return

    // Ensure header has proper structure
    if (!header.querySelector(".header-content")) {
      const headerContent = document.createElement("div")
      headerContent.className = "header-content"

      while (header.firstChild) {
        headerContent.appendChild(header.firstChild)
      }
      header.appendChild(headerContent)
    }

    // Header animations
    setTimeout(() => {
      header.classList.add("slide-down")
    }, 100)

    // Optimized scroll effects
    let lastScrollY = window.scrollY
    let ticking = false

    const updateHeader = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > 100) {
        header.classList.add("scrolled")
      } else {
        header.classList.remove("scrolled")
      }

      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        header.classList.remove("slide-down")
        header.classList.add("slide-up")
      } else {
        header.classList.remove("slide-up")
        header.classList.add("slide-down")
      }

      lastScrollY = currentScrollY
      ticking = false
    }

    window.addEventListener("scroll", () => {
      if (!ticking) {
        requestAnimationFrame(updateHeader)
        ticking = true
      }
    })
  }

  // Enhanced Navigation - Mobile-First
  setupNavigation() {
    const menuToggle = document.getElementById("menu-toggle")
    const nav = document.querySelector("nav")

    if (!menuToggle || !nav) return

    menuToggle.addEventListener("click", () => {
      const isOpen = nav.classList.contains("show")

      if (isOpen) {
        this.closeMenu(nav, menuToggle)
      } else {
        this.openMenu(nav, menuToggle)
      }
    })

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!e.target.closest("nav") && !e.target.closest("#menu-toggle") && nav.classList.contains("show")) {
        this.closeMenu(nav, menuToggle)
      }
    })

    // Close menu on escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && nav.classList.contains("show")) {
        this.closeMenu(nav, menuToggle)
      }
    })

    // Handle orientation change
    window.addEventListener("orientationchange", () => {
      setTimeout(() => {
        if (nav.classList.contains("show")) {
          this.closeMenu(nav, menuToggle)
        }
      }, 100)
    })
  }

  openMenu(nav, menuToggle) {
    nav.classList.add("show")
    menuToggle.setAttribute("aria-expanded", "true")
    menuToggle.innerHTML = "✕ Close"
    document.body.style.overflow = "hidden"
    this.playKidSound("click")
  }

  closeMenu(nav, menuToggle) {
    nav.classList.remove("show")
    menuToggle.setAttribute("aria-expanded", "false")
    menuToggle.innerHTML = "☰ Menu"
    document.body.style.overflow = ""
  }

  // Enhanced Story Interactions - Kid-Friendly
  setupStoryInteractions() {
    const storyCards = document.querySelectorAll(".story-card:not(.coming-soon)")
    const comingSoonCards = document.querySelectorAll(".story-card.coming-soon")

    storyCards.forEach((card, index) => {
      this.setupStoryCard(card, index)
    })

    comingSoonCards.forEach((card) => {
      card.addEventListener("click", () => {
        this.playKidSound("error")
        this.showNotification("This story is coming soon! Stay tuned for more magical tales 🌟", "info")
      })
    })

    this.setupSearchAndFilter()
  }

  setupStoryCard(card, index) {
    const handleClick = (e) => {
      e.preventDefault()
      this.navigateToStory(card)
    }

    const handleKeydown = (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault()
        this.navigateToStory(card)
      }
    }

    card.addEventListener("click", handleClick)
    card.addEventListener("keydown", handleKeydown)

    // Add touch-friendly interactions
    if (this.isTouch) {
      card.addEventListener("touchstart", () => {
        this.hapticFeedback([5])
      })
    }

    // Add hover effects for non-touch devices
    if (!this.isTouch) {
      card.addEventListener("mouseenter", () => {
        this.playKidSound("hover")
      })
    }

    // Add focus management
    card.setAttribute("tabindex", "0")
    card.setAttribute("role", "button")
    card.setAttribute("aria-label", `Read story: ${card.querySelector(".story-title")?.textContent || "Story"}`)
  }

  navigateToStory(card) {
    const header = document.querySelector("header")
    const targetURL = card.getAttribute("data-url")

    if (!targetURL) {
      this.playKidSound("error")
      this.showNotification("Story not found! 😔", "error")
      return
    }

    this.playKidSound("success")
    this.showNotification(this.getRandomEncouragement(), "success")

    // Header animation
    header?.classList.remove("slide-down")
    header?.classList.add("slide-up")

    // Show preloader
    setTimeout(() => {
      this.showEnhancedPreloader()

      setTimeout(() => {
        window.location.href = targetURL
      }, 3300)
    }, 500)
  }

  // Enhanced Preloader - Kid-Friendly
  setupPreloader() {
    const preloader = document.getElementById("preloader")
    if (!preloader) return

    // Add enhanced preloader content if not exists
    if (!preloader.querySelector(".preloader-content")) {
      const preloaderContent = document.createElement("div")
      preloaderContent.className = "preloader-content"
      preloaderContent.innerHTML = `
        <div class="preloader-spinner"></div>
        <div class="preloader-text">Loading your magical story...</div>
        <div class="preloader-subtext">✨ Preparing an amazing adventure ✨</div>
      `
      preloader.appendChild(preloaderContent)
    }
  }

  showEnhancedPreloader() {
    const preloader = document.getElementById("preloader")
    const video = document.getElementById("preloader-video")

    if (preloader) {
      preloader.classList.remove("hidden")
      preloader.classList.add("visible")

      if (video) {
        video.currentTime = 0
        video.play().catch(() => {
          console.log("Video autoplay prevented")
        })
      }
    }
  }

  hidePreloader() {
    const preloader = document.getElementById("preloader")
    if (preloader) {
      preloader.classList.add("hidden")
      preloader.classList.remove("visible")
    }
  }

  // Advanced Search and Filter - Kid-Friendly
  setupSearchAndFilter() {
    const searchInput = document.getElementById("story-search")
    const filterButtons = document.querySelectorAll(".filter-btn")

    if (searchInput) {
      this.setupAdvancedSearch()
    }

    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        this.handleFilterClick(button)
      })
    })
  }

  setupAdvancedSearch() {
    const searchInput = document.getElementById("story-search")
    if (!searchInput) return

    let searchTimeout

    searchInput.addEventListener("input", (e) => {
      clearTimeout(searchTimeout)
      searchTimeout = setTimeout(() => {
        this.performSearch(e.target.value)
      }, 300)
    })

    // Add search icon if not exists
    if (!searchInput.parentNode.querySelector(".search-icon")) {
      const searchIcon = document.createElement("div")
      searchIcon.className = "search-icon"
      searchIcon.innerHTML = "🔍"
      searchInput.parentNode.appendChild(searchIcon)
    }

    this.setupSearchSuggestions(searchInput)
  }

  setupSearchSuggestions(searchInput) {
    const suggestions = [
      "wolf",
      "fox",
      "milkmaid",
      "blueberries",
      "fable",
      "adventure",
      "honesty",
      "cleverness",
      "nature",
      "family",
      "animals",
      "friendship",
    ]

    let suggestionsContainer = searchInput.parentNode.querySelector(".search-suggestions")
    if (!suggestionsContainer) {
      suggestionsContainer = document.createElement("div")
      suggestionsContainer.className = "search-suggestions"
      searchInput.parentNode.appendChild(suggestionsContainer)
    }

    searchInput.addEventListener("focus", () => {
      if (searchInput.value.length === 0) {
        this.showSearchSuggestions(suggestionsContainer, suggestions)
      }
    })

    searchInput.addEventListener("blur", () => {
      setTimeout(() => {
        suggestionsContainer.style.display = "none"
      }, 200)
    })
  }

  showSearchSuggestions(container, suggestions) {
    container.innerHTML = suggestions.map((suggestion) => `<div class="suggestion-item">${suggestion}</div>`).join("")

    container.style.display = "block"

    container.querySelectorAll(".suggestion-item").forEach((item) => {
      item.addEventListener("click", () => {
        document.getElementById("story-search").value = item.textContent
        this.performSearch(item.textContent)
        container.style.display = "none"
        this.playKidSound("click")
      })
    })
  }

  performSearch(searchTerm) {
    const storyCards = document.querySelectorAll(".story-card")
    const normalizedSearch = searchTerm.toLowerCase().trim()

    let visibleCount = 0

    storyCards.forEach((card) => {
      const title = card.querySelector(".story-title")?.textContent.toLowerCase() || ""
      const author = card.querySelector(".story-author")?.textContent.toLowerCase() || ""
      const description = card.querySelector(".story-description")?.textContent.toLowerCase() || ""
      const tags = Array.from(card.querySelectorAll(".tag"))
        .map((tag) => tag.textContent.toLowerCase())
        .join(" ")

      const matches =
        title.includes(normalizedSearch) ||
        author.includes(normalizedSearch) ||
        description.includes(normalizedSearch) ||
        tags.includes(normalizedSearch)

      if (matches || normalizedSearch === "") {
        card.style.display = "block"
        card.style.animation = "fadeInUp 0.5s ease forwards"
        visibleCount++
      } else {
        card.style.display = "none"
      }
    })

    if (normalizedSearch) {
      this.playKidSound("success")
      this.showNotification(`Found ${visibleCount} stories matching "${searchTerm}" 📚`, "info")
    }
  }

  handleFilterClick(button) {
    // Update active filter
    document.querySelectorAll(".filter-btn").forEach((btn) => btn.classList.remove("active"))
    button.classList.add("active")

    const filterValue = button.getAttribute("data-filter")
    this.filterByCategory(filterValue)
    this.playKidSound("click")
  }

  filterByCategory(category) {
    const storyCards = document.querySelectorAll(".story-card")
    let visibleCount = 0

    storyCards.forEach((card) => {
      const cardCategory = card.getAttribute("data-category")
      const shouldShow = category === "all" || cardCategory === category || card.classList.contains("coming-soon")

      if (shouldShow) {
        card.style.display = "block"
        card.style.animation = "fadeInUp 0.5s ease forwards"
        visibleCount++
      } else {
        card.style.display = "none"
      }
    })

    const categoryName = category === "all" ? "all stories" : category
    this.showNotification(`Showing ${visibleCount} ${categoryName} 📖`, "success")
  }

  // Enhanced Back to Top - Kid-Friendly
  setupBackToTop() {
    const backToTopButton = document.createElement("button")
    backToTopButton.className = "back-to-top"
    backToTopButton.innerHTML = "🚀"
    backToTopButton.setAttribute("aria-label", "Back to top")
    document.body.appendChild(backToTopButton)

    let ticking = false

    const updateBackToTop = () => {
      if (window.scrollY > 300) {
        backToTopButton.classList.add("visible")
      } else {
        backToTopButton.classList.remove("visible")
      }
      ticking = false
    }

    window.addEventListener("scroll", () => {
      if (!ticking) {
        requestAnimationFrame(updateBackToTop)
        ticking = true
      }
    })

    backToTopButton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
      this.playKidSound("success")
      this.showNotification("Back to top! 🚀", "success")
    })
  }

  // Enhanced Poem Interactions
  setupPoemInteractions() {
    const poems = document.querySelectorAll(".poems")
    const mainmain = document.querySelector(".mainmain")

    if (poems.length === 0) return

    poems.forEach((poem) => {
      poem.addEventListener("click", () => {
        this.handlePoemClick(poem, poems, mainmain)
      })
    })

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.closeFocusedPoem(poems, mainmain)
      }
    })

    document.addEventListener("click", (e) => {
      if (document.body.classList.contains("blur-background") && !e.target.closest(".poems")) {
        this.closeFocusedPoem(poems, mainmain)
      }
    })
  }

  handlePoemClick(poem, poems, mainmain) {
    const isFocused = poem.classList.contains("focused-poem")

    document.body.classList.remove("blur-background")
    poems.forEach((p) => {
      p.classList.remove("focused-poem", "unfocusing")
    })

    if (!isFocused) {
      document.body.classList.add("blur-background")
      poem.classList.add("focused-poem")

      if (mainmain) {
        mainmain.classList.add("overflow-hidden")
        mainmain.style.overflowY = "hidden"
        mainmain.offsetHeight
      }

      this.playKidSound("success")
      this.showNotification("Enjoy this beautiful poem! 📝✨", "info")
    } else {
      this.closeFocusedPoem(poems, mainmain)
    }
  }

  closeFocusedPoem(poems, mainmain) {
    document.body.classList.remove("blur-background")
    poems.forEach((poem) => {
      if (poem.classList.contains("focused-poem")) {
        poem.classList.add("unfocusing")
        setTimeout(() => {
          poem.classList.remove("unfocusing", "focused-poem")
        }, 500)
      }
    })

    if (mainmain) {
      mainmain.classList.remove("overflow-hidden")
      mainmain.style.overflowY = "scroll"
      mainmain.offsetHeight
    }
  }

  // Enhanced Notification System - Kid-Friendly
  setupNotifications() {
    this.notificationQueue = []
    this.isShowingNotification = false
  }

  showNotification(message, type = "info", duration = 3000) {
    this.notificationQueue.push({ message, type, duration })
    if (!this.isShowingNotification) {
      this.processNotificationQueue()
    }
  }

  processNotificationQueue() {
    if (this.notificationQueue.length === 0) {
      this.isShowingNotification = false
      return
    }

    this.isShowingNotification = true
    const { message, type, duration } = this.notificationQueue.shift()

    const notification = document.createElement("div")
    notification.className = `notification ${type}`
    notification.innerHTML = `
      <div class="notification-content">
        <span class="notification-icon">${this.getNotificationIcon(type)}</span>
        <span class="notification-message">${message}</span>
      </div>
    `

    document.body.appendChild(notification)

    setTimeout(() => {
      notification.classList.add("show")
    }, 100)

    setTimeout(() => {
      notification.classList.remove("show")
      setTimeout(() => {
        if (document.body.contains(notification)) {
          document.body.removeChild(notification)
        }
        this.processNotificationQueue()
      }, 300)
    }, duration)
  }

  getNotificationIcon(type) {
    const icons = {
      success: "🎉",
      error: "😔",
      warning: "⚠️",
      info: "💡",
    }
    return icons[type] || icons.info
  }

  // Intersection Observer for Animations
  setupIntersectionObserver() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in")

          if (entry.target.classList.contains("story-card")) {
            const cards = Array.from(document.querySelectorAll(".story-card"))
            const index = cards.indexOf(entry.target)
            entry.target.style.animationDelay = `${index * 0.1}s`
          }
        }
      })
    }, observerOptions)

    const elementsToObserve = document.querySelectorAll(".story-card, .feature-card, .stat-item")
    elementsToObserve.forEach((element) => {
      observer.observe(element)
    })
  }

  // Enhanced Animations
  setupAnimations() {
    // Add sparkle animation CSS
    if (!document.querySelector("#sparkle-styles")) {
      const sparkleStyles = document.createElement("style")
      sparkleStyles.id = "sparkle-styles"
      sparkleStyles.textContent = `
        @keyframes sparkle {
          0% {
            opacity: 1;
            transform: scale(0) rotate(0deg);
          }
          50% {
            opacity: 1;
            transform: scale(1.2) rotate(180deg);
          }
          100% {
            opacity: 0;
            transform: scale(0) rotate(360deg);
          }
        }
      `
      document.head.appendChild(sparkleStyles)
    }

    const floatingElements = document.querySelectorAll(".floating-elements > div")
    floatingElements.forEach((element, index) => {
      element.style.animationDelay = `${index * 0.5}s`
    })

    this.setupParallaxEffect()
    this.setupRevealAnimations()
  }

  setupParallaxEffect() {
    if (this.isMobile) return // Skip parallax on mobile for performance

    const parallaxElements = document.querySelectorAll(".hero-section, .particles-container")
    let ticking = false

    const updateParallax = () => {
      const scrolled = window.pageYOffset
      const rate = scrolled * -0.3

      parallaxElements.forEach((element) => {
        element.style.transform = `translateY(${rate}px)`
      })
      ticking = false
    }

    window.addEventListener("scroll", () => {
      if (!ticking) {
        requestAnimationFrame(updateParallax)
        ticking = true
      }
    })
  }

  setupRevealAnimations() {
    const revealElements = document.querySelectorAll(".animate-on-scroll")

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed")
          }
        })
      },
      { threshold: 0.15 },
    )

    revealElements.forEach((element) => {
      revealObserver.observe(element)
    })
  }

  // Accessibility Enhancements
  setupAccessibility() {
    this.setupFocusManagement()
    this.setupKeyboardNavigation()
    this.setupScreenReaderAnnouncements()
    this.setupHighContrastMode()
  }

  setupFocusManagement() {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Tab") {
        document.body.classList.add("keyboard-navigation")
      }
    })

    document.addEventListener("mousedown", () => {
      document.body.classList.remove("keyboard-navigation")
    })

    this.setupFocusTrap()
  }

  setupFocusTrap() {
    const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'

    document.addEventListener("keydown", (e) => {
      if (e.key === "Tab" && document.body.classList.contains("blur-background")) {
        const modal = document.querySelector(".focused-poem")
        if (modal) {
          const focusable = modal.querySelectorAll(focusableElements)
          const firstFocusable = focusable[0]
          const lastFocusable = focusable[focusable.length - 1]

          if (e.shiftKey) {
            if (document.activeElement === firstFocusable) {
              lastFocusable.focus()
              e.preventDefault()
            }
          } else {
            if (document.activeElement === lastFocusable) {
              firstFocusable.focus()
              e.preventDefault()
            }
          }
        }
      }
    })
  }

  setupKeyboardNavigation() {
    const storyCards = document.querySelectorAll(".story-card")

    storyCards.forEach((card, index) => {
      card.addEventListener("keydown", (e) => {
        switch (e.key) {
          case "Enter":
          case " ":
            e.preventDefault()
            if (card.classList.contains("coming-soon")) {
              this.showNotification("This story is coming soon! 🌟", "info")
            } else {
              this.navigateToStory(card)
            }
            break
          case "ArrowRight":
          case "ArrowDown":
            e.preventDefault()
            const nextCard = storyCards[index + 1]
            if (nextCard) nextCard.focus()
            break
          case "ArrowLeft":
          case "ArrowUp":
            e.preventDefault()
            const prevCard = storyCards[index - 1]
            if (prevCard) prevCard.focus()
            break
        }
      })
    })
  }

  setupScreenReaderAnnouncements() {
    const liveRegion = document.createElement("div")
    liveRegion.setAttribute("aria-live", "polite")
    liveRegion.setAttribute("aria-atomic", "true")
    liveRegion.className = "sr-only"
    document.body.appendChild(liveRegion)

    this.liveRegion = liveRegion
  }

  announceToScreenReader(message) {
    if (this.liveRegion) {
      this.liveRegion.textContent = message
      setTimeout(() => {
        this.liveRegion.textContent = ""
      }, 1000)
    }
  }

  setupHighContrastMode() {
    if (window.matchMedia("(prefers-contrast: high)").matches) {
      document.body.classList.add("high-contrast")
    }

    window.matchMedia("(prefers-contrast: high)").addEventListener("change", (e) => {
      if (e.matches) {
        document.body.classList.add("high-contrast")
      } else {
        document.body.classList.remove("high-contrast")
      }
    })
  }

  // Responsive Helpers
  setupResponsiveHelpers() {
    this.updateMobileState()

    window.addEventListener("resize", () => {
      this.handleResize()
    })

    window.addEventListener("orientationchange", () => {
      setTimeout(() => {
        this.handleResize()
      }, 100)
    })
  }

  updateMobileState() {
    this.isMobile = window.innerWidth <= 768
    document.body.classList.toggle("is-mobile", this.isMobile)
    document.body.classList.toggle("is-desktop", !this.isMobile)
  }

  handleResize() {
    this.updateMobileState()

    // Close mobile menu if open and switching to desktop
    if (!this.isMobile) {
      const nav = document.querySelector("nav")
      const menuToggle = document.getElementById("menu-toggle")
      if (nav && nav.classList.contains("show")) {
        this.closeMenu(nav, menuToggle)
      }
    }

    this.announceToScreenReader("Page layout updated for screen size")
  }

  // Performance Optimizations
  setupPerformanceOptimizations() {
    this.setupLazyLoading()
    this.setupDebouncedEvents()
    this.preloadCriticalResources()
  }

  setupLazyLoading() {
    const images = document.querySelectorAll("img[data-src]")

    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target
          img.src = img.dataset.src
          img.removeAttribute("data-src")
          imageObserver.unobserve(img)
        }
      })
    })

    images.forEach((img) => imageObserver.observe(img))
  }

  setupDebouncedEvents() {
    let scrollTimeout
    let resizeTimeout

    window.addEventListener("scroll", () => {
      if (scrollTimeout) {
        cancelAnimationFrame(scrollTimeout)
      }
      scrollTimeout = requestAnimationFrame(() => {
        this.handleScroll()
      })
    })

    window.addEventListener("resize", () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(() => {
        this.handleResize()
      }, 250)
    })
  }

  handleScroll() {
    // Handled by individual scroll listeners with requestAnimationFrame
  }

  preloadCriticalResources() {
    const fontPreloads = [
      "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap",
      "https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;700&display=swap",
    ]

    fontPreloads.forEach((href) => {
      const link = document.createElement("link")
      link.rel = "preload"
      link.as = "style"
      link.href = href
      document.head.appendChild(link)
    })
  }

  startPerformanceMonitoring() {
    if ("performance" in window) {
      const navigation = performance.getEntriesByType("navigation")[0]
      if (navigation) {
        const loadTime = navigation.loadEventEnd - navigation.loadEventStart

        if (loadTime > 3000) {
          console.warn("Page load time is slow:", loadTime + "ms")
        }
      }
    }
  }
}

// Initialize the Wordly Kids App
const wordlyKidsApp = new WordlyKidsApp()

// Service Worker Registration for PWA capabilities
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        console.log("SW registered: ", registration)
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError)
      })
  })
}

// Export for module usage
if (typeof module !== "undefined" && module.exports) {
  module.exports = WordlyKidsApp
}
