// Copyright 2019-present the Flutter authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/// A simple data model for most entites within Rally.
class NamedAmount {
  const NamedAmount({this.name, this.primaryAmount});

  /// The display name of this entity .
  final String name;

  // The primary amount or value of this entity.
  final double primaryAmount;
}

/// Utils for [NamedAmount].
class NamedAmounts {
  /// Calculates the sum of the primary amounts of a list of [NamedAmount].
  static double sumPrimaryAmounts(List<NamedAmount> items) {
    return items.fold(
      0,
      (sum, next) => sum + next.primaryAmount,
    );
  }
}

/// A data model for an account.
///
/// The [primaryAmount] is the balance of the account in USD.
class AccountData extends NamedAmount {
  const AccountData({String name, double primaryAmount, this.accountNumber})
      : super(name: name, primaryAmount: primaryAmount);

  /// The full displayable account number.
  final String accountNumber;
}

/// A data model for a bill.
///
/// The [primaryAmount] is the amount due in USD.
class BillData extends NamedAmount {
  const BillData({String name, double primaryAmount, this.dueDate})
      : super(name: name, primaryAmount: primaryAmount);

  /// The due date of this bill.
  final String dueDate;
}

/// A data model for a budget.
///
/// The [primaryAmount] is the budget cap in USD.
class BudgetData extends NamedAmount {
  const BudgetData({String name, double primaryAmount, this.amountUsed})
      : super(name: name, primaryAmount: primaryAmount);

  /// Amount of the budget that is consumed or used.
  final double amountUsed;
}

/// Utils for [BudgetData].
class BudgetItems {
  static double sumAmountsUsed(List<BudgetData> items) {
    return items.fold(0.0, (sum, next) => sum + next.amountUsed);
  }
}

class DetailedEventData {
  const DetailedEventData({
    this.title,
    this.date,
    this.amount,
  });

  final String title;
  final DateTime date;
  final double amount;
}

/// Class to return dummy data lists.
///
/// In a real app, this might be replaced with some asynchronous service.
class DummyDataService {
  static List<AccountData> getAccountDataList() {
    return <AccountData>[
      AccountData(
        name: 'Checking',
        primaryAmount: 2215.13,
        accountNumber: '1234561234',
      ),
      AccountData(
        name: 'Home Savings',
        primaryAmount: 8678.88,
        accountNumber: '8888885678',
      ),
      AccountData(
        name: 'Car Savings',
        primaryAmount: 987.48,
        accountNumber: '8888889012',
      ),
      AccountData(
        name: 'Vacation',
        primaryAmount: 253.0,
        accountNumber: '1231233456',
      ),
    ];
  }

  static List<DetailedEventData> getDetailedEventItems() {
    return <DetailedEventData>[
      DetailedEventData(
          title: 'Genoe', date: DateTime.utc(2019, 1, 24), amount: -16.54),
      DetailedEventData(
          title: 'Fortnightly Subscribe',
          date: DateTime.utc(2019, 1, 5),
          amount: -12.54),
      DetailedEventData(
          title: 'Circle Cash', date: DateTime.utc(2019, 1, 5), amount: 365.65),
      DetailedEventData(
          title: 'Crane Hospitality',
          date: DateTime.utc(2019, 1, 4),
          amount: -705.13),
      DetailedEventData(
          title: 'ABC Payroll',
          date: DateTime.utc(2018, 12, 15),
          amount: 1141.43),
      DetailedEventData(
          title: 'Shrine', date: DateTime.utc(2018, 12, 15), amount: -88.88),
      DetailedEventData(
          title: 'Foodmates', date: DateTime.utc(2018, 12, 4), amount: -11.69),
    ];
  }

  static List<BillData> getBillDataList() {
    return <BillData>[
      BillData(
        name: 'RedPay Credit',
        primaryAmount: 45.36,
        dueDate: 'Jan 29',
      ),
      BillData(
        name: 'Rent',
        primaryAmount: 1200.0,
        dueDate: 'Feb 9',
      ),
      BillData(
        name: 'TabFine Credit',
        primaryAmount: 87.33,
        dueDate: 'Feb 22',
      ),
      BillData(
        name: 'ABC Loans',
        primaryAmount: 400.0,
        dueDate: 'Feb 29',
      ),
    ];
  }

  static List<BudgetData> getBudgetDataList() {
    return <BudgetData>[
      BudgetData(
        name: 'Coffee Shops',
        primaryAmount: 70.0,
        amountUsed: 45.49,
      ),
      BudgetData(
        name: 'Groceries',
        primaryAmount: 170.0,
        amountUsed: 16.45,
      ),
      BudgetData(
        name: 'Restaurants',
        primaryAmount: 170.0,
        amountUsed: 123.25,
      ),
      BudgetData(
        name: 'Clothing',
        primaryAmount: 70.0,
        amountUsed: 19.45,
      ),
    ];
  }

  static List<String> getSettingsTitles() {
    return <String>[
      'Manage Accounts',
      'Tax Documents',
      'Passcode and Touch ID',
      'Notifications',
      'Personal Information',
      'Paperless Settings',
      'Find ATMs',
      'Help',
    ];
  }
}
