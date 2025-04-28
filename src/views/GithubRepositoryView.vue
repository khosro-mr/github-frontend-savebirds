<template>
  <div class="github-page">
    <!-- Title Section -->
    <section class="title-section text-center my-5">
      <h1 class="display-4 fw-bold">GitHub</h1>
      <p class="lead mt-4">
        SaveBirds.app is an open-source project dedicated to bird conservation through
        data analysis and visualization. Our codebase is publicly available on GitHub,
        making it accessible for contributions, collaboration, and improvement.
      </p>
    </section>

    <!-- Repository Information -->
    <section class="repository-section mb-5">
      <div class="card github-card">
        <div class="card-body">
          <div class="d-flex align-items-start mb-3">
            <span class="me-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-github text-dark" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.7-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
              </svg>
            </span>
            <div>
              <h5 class="card-title fs-4">
                <a href="https://github.com/SaveBirds-app" class="text-decoration-none text-primary">{{ organizationName }}</a> / 
                <a href="https://github.com/SaveBirds-app" class="text-decoration-none fw-bold text-primary">SaveBirds.app</a>
              </h5>
              <p class="card-text">{{ repositoryDescription }}</p>
            </div>
          </div>
          
          <div class="repository-stats d-flex flex-wrap gap-3 mb-3">
            <a href="https://github.com/SaveBirds-app" class="text-decoration-none">
              <span class="d-flex align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star me-1" viewBox="0 0 16 16">
                  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                </svg>
                Star
              </span>
            </a>
            <a href="https://github.com/SaveBirds-app" class="text-decoration-none">
              <span class="d-flex align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-diagram-2 me-1" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H11a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 5 7h2.5V6A1.5 1.5 0 0 1 6 4.5v-1zM8.5 5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1zM3 11.5A1.5 1.5 0 0 1 4.5 10h1A1.5 1.5 0 0 1 7 11.5v1A1.5 1.5 0 0 1 5.5 14h-1A1.5 1.5 0 0 1 3 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm4.5.5a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1A1.5 1.5 0 0 1 9 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"/>
                </svg>
                Fork
              </span>
            </a>
            <a href="https://github.com/SaveBirds-app" class="text-decoration-none">
              <span class="d-flex align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye me-1" viewBox="0 0 16 16">
                  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                </svg>
                Watch
              </span>
            </a>
          </div>
          
          <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-3">
            <a href="https://github.com/SaveBirds-app" class="btn btn-sm btn-outline-success">
              <span class="d-flex align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle me-1" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg>
                Follow
              </span>
            </a>
          </div>
          
          <div class="repository-url mb-3">
            <div class="input-group">
              <input type="text" class="form-control form-control-sm" value="https://github.com/SaveBirds-app" readonly>
              <button class="btn btn-sm btn-outline-secondary" type="button">Copy</button>
            </div>
          </div>
          
          <p class="card-text">
            <small class="text-muted">Last updated: Recent</small>
            <span class="ms-2 badge bg-light text-dark border">MIT License</span>
          </p>
        </div>
      </div>
    </section>

    <!-- GitHub Organization Section -->
    <section class="organization-section mb-5">
      <div class="card github-card">
        <div class="card-body">
          <h5 class="card-title mb-4">Organization</h5>
          
          <div class="people-section mb-4">
            <h6 class="card-subtitle mb-3">People</h6>
            <div class="d-flex flex-wrap gap-3">
              <div v-for="member in organizationMembers" :key="member.id" class="text-center">
                <a :href="member.profileUrl" target="_blank" rel="noopener noreferrer" class="text-decoration-none">
                  <img :src="'/images/team/' + member.avatar" :alt="member.name" class="rounded-circle profile-img" width="50" height="50">
                  <div class="mt-1 small text-center">{{ member.username }}</div>
                </a>
              </div>
            </div>
          </div>
          
          <div class="topics-section">
            <h6 class="card-subtitle mb-3">Topics</h6>
            <div class="d-flex flex-wrap gap-2">
              <a 
                v-for="topic in topics" 
                :key="topic" 
                href="https://github.com/topics/" 
                class="badge rounded-pill topic-badge text-decoration-none"
              >
                {{ topic }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- README.md Content -->
    <section class="readme-section mb-5">
      <div class="card github-card">
        <div class="card-header bg-white d-flex align-items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-book me-2" viewBox="0 0 16 16">
            <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
          </svg>
          README.md
        </div>
        <div class="card-body readme-content">
          <div v-html="markdownToHtml(readmeContent)"></div>
        </div>
      </div>
    </section>

    <!-- Contact Information -->
    <section class="contact-section mb-5">
      <div class="card github-card">
        <div class="card-body">
          <h5 class="card-title mb-4">Contact Information</h5>
          
          <div class="mb-3">
            <h6 class="card-subtitle mb-2">Organization Manager</h6>
            <p>
              Mostafa M. Rezaee is the manager of the SaveBirds.app GitHub organization.
              For any inquiries about the project or collaboration opportunities, please use the contact details below.
            </p>
          </div>
          
          <div class="contact-details">
            <ul class="list-group list-group-flush">
              <li class="list-group-item border-0 ps-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope me-2" viewBox="0 0 16 16">
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                </svg>
                <a :href="'mailto:' + contactInfo.email" class="text-decoration-none">{{ contactInfo.email }}</a>
              </li>
              <li class="list-group-item border-0 ps-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin me-2" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                </svg>
                <a :href="contactInfo.linkedin" target="_blank" rel="noopener noreferrer" class="text-decoration-none">LinkedIn Profile</a>
              </li>
              <li class="list-group-item border-0 ps-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-globe me-2" viewBox="0 0 16 16">
                  <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"/>
                </svg>
                <a :href="contactInfo.website" target="_blank" rel="noopener noreferrer" class="text-decoration-none">Personal Website</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'GithubRepositoryView',
  data() {
    return {
      repositoryUrl: "https://github.com/SaveBirds-app",
      organizationName: "SaveBirds-app",
      repositoryDescription: "A web tool for analyzing the North American Breeding Bird Survey data to enhance conservation in protected areas",
      organizationMembers: [
        {
          id: 1,
          name: "Mostafa M. Rezaee",
          username: "mostafa-rezaee",
          avatar: "mostafa-rezaee.jpg",
          profileUrl: "https://github.com/mostafa-rezaee"
        }
      ],
      topics: ["conservation", "bird-survey", "data-analysis", "web-tool", "research"],
      contactInfo: {
        email: "mostafa.mohammadrezaee@gmail.com",
        linkedin: "https://www.linkedin.com/in/mostafa-m-rezaee/",
        website: "https://mostafa-mr.com/"
      },
      readmeContent: `
# SaveBirds.app

A web tool for analyzing the North American Breeding Bird Survey data to enhance conservation in protected areas.

## Features

- Metrics analysis
- Presence-Absence data visualization
- Bird Atlas Generator
- And more...

## Getting Started

Our tool provides a user-friendly interface for researchers, conservationists, and bird enthusiasts to analyze breeding bird survey data.

### Prerequisites

- Modern web browser
- Interest in bird conservation

### Usage

1. Navigate to the analysis section
2. Upload your data or use our sample dataset
3. Select the metrics and visualization options
4. Generate reports and share your findings

## Contributing

We welcome contributions from the community! Whether you're a developer, data scientist, ornithologist, or conservation enthusiast, there are many ways to get involved.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
      `
    }
  },
  methods: {
    markdownToHtml(markdown) {
      // Simple markdown parsing for demonstration
      // In a real implementation, you would use a library like marked.js
      let html = markdown
        .replace(/^# (.*$)/gm, '<h1>$1</h1>')
        .replace(/^## (.*$)/gm, '<h2>$1</h2>')
        .replace(/^### (.*$)/gm, '<h3>$1</h3>')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/\n- (.*)/g, '<br>• $1')
        .replace(/\n\n/g, '<br><br>');
      
      return html;
    }
  }
}
</script>

<style scoped>
.github-page {
  background-color: #f6f8fa;
  color: #24292e;
}

.github-card {
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
}

.repository-url .input-group {
  max-width: 400px;
}

.profile-img {
  border: 1px solid #e1e4e8;
  transition: transform 0.2s;
}

.profile-img:hover {
  transform: scale(1.05);
}

.topic-badge {
  background-color: #f1f8ff;
  color: #0366d6;
  font-weight: normal;
  padding: 6px 12px;
}

.readme-content {
  line-height: 1.6;
}

.readme-content h1 {
  font-size: 1.75rem;
  margin-bottom: 1rem;
  padding-bottom: 0.3rem;
  border-bottom: 1px solid #eaecef;
}

.readme-content h2 {
  font-size: 1.5rem;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
  padding-bottom: 0.3rem;
  border-bottom: 1px solid #eaecef;
}

.readme-content h3 {
  font-size: 1.25rem;
  margin-top: 1.25rem;
  margin-bottom: 0.75rem;
}

.contact-details .list-group-item {
  padding-left: 0;
}
</style> 