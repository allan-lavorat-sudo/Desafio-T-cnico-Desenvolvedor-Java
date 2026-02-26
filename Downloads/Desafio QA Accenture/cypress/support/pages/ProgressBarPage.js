class ProgressBarPage {
    visit() {
        cy.visit('/progressbar');
    }

    clickStartStop() {
        cy.get('#startStopButton').click();
    }

    getProgressBarValue() {
        return cy.get('.progress-bar').invoke('attr', 'aria-valuenow').then(parseInt);
    }

    stopAtPercentage(percentage) {
        const checkProgress = () => {
            this.getProgressBarValue().then((val) => {
                if (val >= percentage) {
                    this.clickStartStop();
                } else {
                    cy.wait(100); // Check every 100ms
                    checkProgress();
                }
            });
        };
        checkProgress();
    }

    reset() {
        cy.get('#resetButton').click();
    }
}

export default new ProgressBarPage();
