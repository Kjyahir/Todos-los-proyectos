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

import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
//import 'package:rally/charts/pie_chart.dart';
import 'package:rally/data.dart';
//import 'package:rally/finance.dart';

class BudgetsView extends StatefulWidget {
  @override
  _BudgetsViewState createState() => _BudgetsViewState();
}

class _BudgetsViewState extends State<BudgetsView>
    with SingleTickerProviderStateMixin {
  final List<BudgetData> items = DummyDataService.getBudgetDataList();

  @override
  Widget build(BuildContext context) {
    double capTotal = NamedAmounts.sumPrimaryAmounts(items);
    double usedTotal = BudgetItems.sumAmountsUsed(items);
    return Container();
//    List<RallyPieChartSegment> segments =
//        RallyPieChartSegments.fromBudgetItems(items);
//    return FinancialEntityView(
//      heroLabel: 'Left',
//      heroAmount: capTotal - usedTotal,
//      segments: segments,
//      wholeAmount: capTotal,
//      financialEntityCards:
//          FinancialEntityCategoryViews.fromBudgetItems(items, context),
//    );
  }
}
