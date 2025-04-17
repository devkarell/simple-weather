const dashboard = <HTMLDivElement>document.getElementById('dashboard');
const dashboardInfos = <HTMLDivElement>document.getElementById('dashboard-infos');
const dashboardGrid = <HTMLDivElement>document.getElementById('dashboard-grid');
const expandDashboardBtn = <HTMLButtonElement>document.getElementById('expand-dashboard');

let isDashboardExpanded = false;

function setMiscMode(forceCompactMode?: boolean) {
    if (forceCompactMode) {
        expandDashboardBtn.textContent = 'ver mais';
        isDashboardExpanded = false;
        return;
    }

    expandDashboardBtn.textContent = isDashboardExpanded ? 'ver mais' : 'ver menos';
    isDashboardExpanded = !isDashboardExpanded;
}

function setGridMode(forceCompactMode?: boolean) {
    if (forceCompactMode) {
        dashboardGrid.classList.remove('expanded');

        if (!dashboardGrid.classList.contains('compacted')) {
            dashboardGrid.classList.add('compacted');
        }

        if (!dashboardInfos.classList.contains('dashboard-infos-compact')) {
            dashboardInfos.classList.add('dashboard-infos-compact');
        }
    } else {
        // grid-parent-container -> grid-container
        dashboardInfos.classList.remove(isDashboardExpanded ? 'dashboard-infos-expanded' : 'dashboard-infos-compact');
        dashboardInfos.classList.add(isDashboardExpanded ? 'dashboard-infos-compact' : 'dashboard-infos-expanded');

        // container -> grid-container
        dashboardGrid.classList.remove(isDashboardExpanded ? 'expanded' : 'compacted');
        dashboardGrid.classList.add(isDashboardExpanded ? 'compacted' : 'expanded');
    }
}

function setDashboardMode(forceCompactMode?: boolean) {
    const hiddenElements = dashboardInfos.querySelectorAll('.hidden-element');

    for (const hiddenElement of hiddenElements) {
        const element = <HTMLDivElement>hiddenElement;

        if (forceCompactMode) {
            element.style.display = 'none';
        } else {
            element.style.display = isDashboardExpanded ? 'none' : 'flex';
        }
    }

    setGridMode(forceCompactMode);
    setMiscMode(forceCompactMode);

    if (!isDashboardExpanded && dashboard.style.display === 'flex') {
        dashboard.scrollIntoView({ block: 'center', behavior: 'smooth' });
    }
}

setDashboardMode(true);
expandDashboardBtn.addEventListener('click', () => {
    setDashboardMode();
});
