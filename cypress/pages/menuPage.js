class MenuPage {
    selectorsList() {
        const selectors = {
            adminButton: '[href="/web/index.php/admin/viewSystemUsers"]',
            pimButton: '[href="/web/index.php/pim/viewEmployeeList"]',
            leaveButton: '[href="/web/index.php/leave/viewLeaveList"]',
            timeButton: '[href="/web/index.php/time/viewEmployeeTimesheet"]',
            recruitmentButton: '[href="/web/index.php/recruitment/viewCandidates"]',
            myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
            performanceButton: '[href="/web/index.php/performance/searchEvaluatePerformanceReview"]',
            dashboardButton: '[href="/web/index.php/dashboard/index"]',
            directoryButton: '[href="/web/index.php/directory/viewDirectory"]',
            maintenanceButton: '[href="/web/index.php/maintenance/purgeEmployee"]',
            claimButton: '[href="/web/index.php/claim/viewAssignClaim"]',
            buzzButton: '[href="/web/index.php/buzz/viewBuzz"]',

        }
        return selectors

    }
    accessMyInfo() {
        cy.get(this.selectorsList().myInfoButton).click()
    }

    accessPerformance() {
        cy.get(this.selectorsList().performanceButton).click()
    }

    accessAdmin() {
        cy.get(this.selectorsList().adminButton).click()
    }

    acessPIM() {
        cy.get(this.selectorsList().pimButton).click()
    }

    accessLeave() {
        cy.get(this.selectorsList().leaveButton).click()
    }

    accessTime() {
        cy.get(this.selectorsList().timeButton).click()
    }

    accessRecruitment() {
        cy.get(this.selectorsList().recruitmentButton).click()
    }

    accessPerformance() {
        cy.get(this.selectorsList().performanceButton).click()
    }

    accessDashboard() {
        cy.get(this.selectorsList().dashboardButton).click()
    }

    accessDiretory() {
        cy.get(this.selectorsList().directoryButton).click()
    }

    accessMaintenance() {
        cy.get(this.selectorsList().maintenanceButton).click()
    }
    
    accessClaim() {
        cy.get(this.selectorsList().claimButton).click()
    }
        
    accessBuzz() {
        cy.get(this.selectorsList().buzzButton).click()
    }
}

export default MenuPage