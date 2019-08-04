import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from '../subscription.service';
import { Subscription } from '../subscription';
import { Account } from '../account';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {

  subscriptions: Subscription[];
  subscriptionService: SubscriptionService;
  pageTitle: string
  accounts: Account[];
  activeAccount: Account;
  activeSubscription: Subscription;

  constructor(subscriptionService: SubscriptionService ) {

    this.pageTitle = "All Subscriptions";
    this.subscriptionService = subscriptionService;
    this.subscriptions = [];
    this.activeAccount = {} as Account;
    this.activeSubscription = {} as Subscription;

    console.log("Getting the Subs");

    this.subscriptionService.getSubscriptions()
      .subscribe((data: Subscription[]) => {

        for (var i = 0; i < data.length; ++i) {

          this.subscriptions.push(data[i]);
        }

      });
  }

  ngOnInit() {
  }

  isActiveSubscription(subscription: Subscription) {
      return this.activeSubscription === subscription;
  };

  isActiveAccount(account: Account) {
      return this.activeAccount === account;
  };

  setSubscription(subscription: Subscription){
    this.activeSubscription = subscription;
    this.accounts = subscription.accounts;
  }

  setAccount(account: Account){
    this.activeAccount = account;
  }

}
