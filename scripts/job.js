let jobs = [
    {
        id: 1, company: "mobile First Corp", position: "React Native Developer", location: "Remote", type: "full-time", salary: "$130,000 - $175,000", description: "Build cross-platform mobile applications using React Native.", status: "all"
    },

    {
        id: 2, company: "WebFlow Agency", position: "Web Designer & Developer", location: "Los Angeles, CA", type: "Part-time", salary: "$80,000 - $120,000", description: "Create stunning web experiences for high-profile clients.", status: "all"
    },

    {
        id: 3, company: "DataViz Solutions", position: "Data Visualization Specialist", location: "Boston, MA", type: "Full-time", salary: "$125,000 - $145,000", description: "Transform complex data into compelling visualizations.", status: "all"
    },

    {
        id: 4, company: "CloudFirst Inc", position: "Backend Developer", location: "Seattle, WA", type: "Full-time", salary: "$140,000 - $190,000", description: "Design and maintain scalable backend systems using Python.", status: "all"
    },

    {
        id: 5, company: "Innovation Labs", position: "UI/UX Engineer", location: "Austin, TX", type: "Full-time", salary: "$110,000 - $130,000", description: "Create beautiful and functional user interfaces for our products.", status: "all"
    },

    {
        id: 6, company: "MegaCorp Solutions", position: "JavaScript Developer", location: "New York, NY", type: "Full-time", salary: "$130,000 - $170,000", description: "Build enterprise applications with JavaScript and modern frameworks.", status: "all"
    },

    {
        id: 7, company: "StartupXYZ", position: "Full Stack Engineer", location: "Remote", type: "Full-time", salary: "$120,000 - $150,000", description: "Join our fast-growing startup and work on our core platform.", status: "all"
    },

    {
        id: 8, company: "TechCorp Industries", position: "Senior Frontend Developer", location: "San Francisco", type: "Full-time", salary: "$150,000 - $180,000", description: "Expert React and TypeScript developer needed for cutting-edge projects.", status: "all"
    }
]

let activeTab = "all";
const jobContainer = document.getElementById('job-container');
const tabContainer = document.getElementById('taps');

function render() {
    const filtered = activeTab === "all" ? jobs : jobs.filter(j => j.status === activeTab);

    document.getElementById('total-count').innerText = jobs.length;
    document.getElementById('interview-count').innerText = jobs.filter(j => j.status === 'interview').length;
    document.getElementById('rejected-count').innerText = jobs.filter(j => j.status === 'rejected').length;
    document.getElementById('tap-count').innerText = filtered.length;

    document.getElementById('empty-state').classList.toggle('hidden', filtered.length > 0);
    jobContainer.innerHTML = "";

    filtered.forEach(job => {
        const card = document.createElement('div');

        const borderClass = job.status === 'interview' ? 'border-success' : job.status === 'rejected' ? 'border-error' : 'border-gray-200';

        card.className = `bg-white p-5 rounded-xl shadow-sm border-2 ${borderClass} transition-all`;

        card.innerHTML = `
            <div class="flex justify-between items-start mb-2">
                <div>
                    <h4 class="text-primary font-bold text-lg">${job.company}</h4>
                    <p class="font-bold text-slate-700">${job.position}</p>
                </div>
                <button data-id="${job.id}" data-action="delete" class="btn btn-ghost btn-xs text-error">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
            <div class="flex flex-wrap gap-3 text-xs text-gray-400 mb-3">
                <span> ${job.location}</span> • <span> ${job.type}</span> • <span> ${job.salary}</span>
            </div>

            ${job.status !== 'all' ? `
                <div class="mb-3">
                    <span class="badge ${job.status === 'interview' ? 'badge-success' : 'badge-error'} text-white font-bold uppercase p-3">
                        ${job.status}
                    </span>
                </div>
            ` : ''}

            <p class="text-sm text-gray-600 mb-4">${job.description}</p>
            <div class="flex gap-2">
                <button data-id="${job.id}" data-action="interview" class="btn btn-sm btn-outline btn-success">Interview</button>
                <button data-id="${job.id}" data-action="rejected" class="btn btn-sm btn-outline btn-error">Rejected</button>
            </div>
        `;
        jobContainer.appendChild(card);
    });
}

if (jobContainer) {
    jobContainer.addEventListener('click', (e) => {
        const btn = e.target.closest('button');
        if (!btn) return;

        const id = parseInt(btn.dataset.id);
        const action = btn.dataset.action;

        if (action === 'delete') {
            jobs = jobs.filter(j => j.id != id);
        } else {
            const found = jobs.find(j => j.id === id);
            if (found) found.status = action;
        }
        render();
    });
}

if (tabContainer) {
    tabContainer.addEventListener('click', (e) => {
        const tabBtn = e.target.closest('.tab');
        if (!tabBtn) return;

        document.querySelectorAll('.tab').forEach(t => t.classList.remove('tab-active'));
        tabBtn.classList.add('tab-active');

        activeTab = tabBtn.dataset.tab;
        render();
    });
}

render();