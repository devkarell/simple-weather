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
    } else {
        dashboardGrid.classList.remove(isDashboardExpanded ? 'expanded' : 'compacted');
        dashboardGrid.classList.add(isDashboardExpanded ? 'compacted' : 'expanded');
    }
}

function setDashboardMode(forceCompactMode?: boolean) {
    const dashboardInfos = <HTMLDivElement>document.getElementById('dashboard-infos');
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
}

setDashboardMode(true);
expandDashboardBtn.addEventListener('click', () => {
    setDashboardMode();
});
