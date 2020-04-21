// Copyright 2020, the Flutter project authors. Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

import 'package:flutter/material.dart';
import 'package:web_dashboard/src/widgets/edit_entry.dart';
import 'package:web_dashboard/src/widgets/edit_category.dart';
import 'package:web_dashboard/src/widgets/third_party/adaptive_scaffold.dart';

import 'dashboard.dart';
import 'entries.dart';

class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  int _pageIndex = 0;

  @override
  Widget build(BuildContext context) {
    return AdaptiveScaffold(
      currentIndex: _pageIndex,
      destinations: [
        AdaptiveScaffoldDestination(title: 'Home', icon: Icons.home),
        AdaptiveScaffoldDestination(title: 'Entries', icon: Icons.list),
        AdaptiveScaffoldDestination(title: 'Settings', icon: Icons.settings),
      ],
      body: _pageAtIndex(_pageIndex),
      onNavigationIndexChange: (newIndex) {
        setState(() {
          _pageIndex = newIndex;
        });
      },
      floatingActionButton:
          _hasFloatingActionButton ? _floatingActionButton(context) : null,
    );
  }

  bool get _hasFloatingActionButton {
    if (_pageIndex == 2) return false;
    return true;
  }

  Widget _floatingActionButton(BuildContext context) {
    return FloatingActionButton(
      child: Icon(Icons.add),
      onPressed: () => _handleFabPressed(),
    );
  }

  void _handleFabPressed() {
    if (_pageIndex == 0) {
      showDialog(context: context, child: NewCategoryDialog());
      return;
    }

    if (_pageIndex == 1) {
      showDialog(context: context, child: NewEntryDialog());
      return;
    }
  }

  Widget _pageAtIndex(int index) {
    if (index == 0) {
      return DashboardPage();
    }

    if (index == 1) {
      return EntriesPage();
    }

    return Center(child: Text('Settings page'));
  }
}
