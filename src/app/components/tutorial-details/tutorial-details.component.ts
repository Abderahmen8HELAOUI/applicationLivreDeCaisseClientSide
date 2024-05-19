import {Component, Input, OnInit} from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial.model';
import {TutorialService} from "../../services/tutorial.service";
import {ActivatedRoute, Router} from "@angular/router";
import {catchError, of, tap} from "rxjs";

@Component({
  selector: 'app-tutorial-details',
  templateUrl: './tutorial-details.component.html',
  styleUrls: ['./tutorial-details.component.css']
})
export class TutorialDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentTutorial: Tutorial = {
    title: '',
    recipeToday: 0,
    balancePreviousMonth: 0,
    totalRecipeToday: 0,

    operationTreasuryAnterior: 0,
    operationTreasuryToday: 0,
    totalOperationTreasury: 0,

    operationPreviousRegulation: 0,
    operationRegulationToday: 0,
    totalOperationRegulation: 0,

    totalExpenses: 0,

    finalBalanceToday: 0,

    postCurrentAccount: 0,
    creditExpected: 0,
    rateExpected: 0,
    finalPostCurrentAccount: 0,

    otherValues: 0,
    statesRepartition: 0,

    totalCash: 0,

    moneySpecies: 0,

    moneyOnCashier: 0,

    organismId: 0,
    description: '',
    published: false
  };

  message = '';
  extractedDate: string = '';


  totalRecipeToday: number =0;
  totalTreasuryOperations: number =0;
  totalRegulationOperations: number =0;
  totalExpenses: number =0;
  currentBalanceToday: number =0;
  FinalPostalCurrentAccount: number =0;
  TotalCash: number =0;
  CurrencyCashOnCashier: number =0;
  constructor(
    private tutorialService: TutorialService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getTutorial(this.route.snapshot.params['id']);
    };
    this.loadTotalRecipe();
    this.loadTotalTreasuryOperations();
    this.loadTotalRegulationOperations();
    this.loadTotalExpenses();
    this.loadCurrentBalanceToday();
    this.loadFinalPostalCurrentAccount();
    this.loadTotalCash();
    this.loadCurrencyCashOnCashier();
  }

  extractAndDisplayDate(title: any): string {
    // Extract date substring from title (assuming it's always at the end)
    const dateSubstring = title.slice(-10);
    // Format and return the extracted date
    return `Operation Date is: ${dateSubstring}`;
  }
  getTutorial(id: string): void {
    this.tutorialService.get(id).subscribe({
      next: (data) => {
        this.currentTutorial = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  updatePublished(status: boolean): void {
    const data = {
      title: this.currentTutorial.title,
      description: this.currentTutorial.description,
      published: status
    };

    this.message = '';

    this.tutorialService.update(this.currentTutorial.id, data).subscribe({
      next: (res) => {
        console.log(res);
        this.currentTutorial.published = status;
        this.message = res.message
          ? res.message
          : 'The status was updated successfully!';
      },
      error: (e) => console.error(e)
    });
  }

  updateTutorial(): void {
    this.message = '';

    this.tutorialService
      .update(this.currentTutorial.id, this.currentTutorial)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message
            ? res.message
            : 'This tutorial was updated successfully!';
          this.router.navigate(['/tutorials']).then(r => {
            console.log('Navigation successful:', r);
          });

        },
        error: (e) => console.error(e)
      });
  }

  deleteTutorial(): void {
    this.tutorialService.delete(this.currentTutorial.id).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/tutorials']).then(r => {
          console.log('Navigation successful:', r);
        });
      },
      error: (e) => console.error(e)
    });
  }

  loadTotalRecipe(): void {
    this.tutorialService.getTotalRecipe().pipe(
      tap(totalRecipe => {
        this.totalRecipeToday = totalRecipe;
      }),
      catchError(error => {
        console.error('Error fetching total recipe:', error);
        // Return an observable with a fallback value if necessary
        return of(null);
      })
    ).subscribe();
  }

  loadTotalTreasuryOperations(): void {
    this.tutorialService.getTotalTreasuryOperations()
      .subscribe((totalTreasuryOperations) => {
        this.totalTreasuryOperations = totalTreasuryOperations;
      }, (error) => {
        console.error('Error fetching total recipe:', error);
      });
  }

  loadTotalRegulationOperations(): void {
    this.tutorialService.getTotalRegulationOperations()
      .subscribe((totalRegulationOperations) => {
        this.totalRegulationOperations = totalRegulationOperations;
      }, (error) => {
        console.error('Error fetching total recipe:', error);
      });
  }

  loadTotalExpenses(): void {
    this.tutorialService.getTotalExpenses()
      .subscribe((totalExpenses) => {
        this.totalExpenses = totalExpenses;
      }, (error) => {
        console.error('Error fetching total recipe:', error);
      });
  }

  loadCurrentBalanceToday(): void {
    this.tutorialService.getCurrentBalanceToday()
      .subscribe((currentBalanceToday) => {
        this.currentBalanceToday = currentBalanceToday;
      }, (error) => {
        console.error('Error fetching total recipe:', error);
      });
  }

  private loadFinalPostalCurrentAccount(): void {
    this.tutorialService.getFinalPostalCurrentAccount()
      .subscribe((currentBalanceToday) => {
        this.FinalPostalCurrentAccount = currentBalanceToday;
      }, (error) => {
        console.error('Error fetching total recipe:', error);
      });

  }

  private loadTotalCash() : void {
    this.tutorialService.getTotalCash()
      .subscribe((currentBalanceToday) => {
        this.TotalCash = currentBalanceToday;
      }, (error) => {
        console.error('Error fetching total recipe:', error);
      });

  }

  private loadCurrencyCashOnCashier() : void {
    this.tutorialService.getCurrencyCashOnCashier()
      .subscribe((currentBalanceToday) => {
        this.CurrencyCashOnCashier = currentBalanceToday;
      }, (error) => {
        console.error('Error fetching total recipe:', error);
      });

  }

}
