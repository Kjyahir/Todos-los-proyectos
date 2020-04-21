// Copyright 2020, the Flutter project authors. Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

import 'package:test/test.dart';

import 'package:web_dashboard/src/api/api.dart';
import 'package:web_dashboard/src/api/mock.dart';

void main() {
  group('mock dashboard API', () {
    DashboardApi api;

    setUp(() {
      api = MockDashboardApi();
    });

    group('items', () {
      test('insert', () async {
        var item = await api.categories.insert(Category('Coffees Drank'));
        expect(item.name, 'Coffees Drank');
      });

      test('delete', () async {
        await api.categories.insert(Category('Coffees Drank'));
        var item2 = await api.categories.insert(Category('Miles Ran'));
        var removed = await api.categories.delete(item2.id);

        expect(removed.name, 'Miles Ran');

        var items = await api.categories.list();
        expect(items, hasLength(1));
      });

      test('update', () async {
        var item = await api.categories.insert(Category('Coffees Drank'));
        await api.categories.update(Category('Bagels Consumed'), item.id);

        var latest = await api.categories.get(item.id);
        expect(latest.name, equals('Bagels Consumed'));
      });
      test('subscribe', () async {
        var stream = api.categories.stream();

        stream.listen(expectAsync1((x) {
          expect(x, hasLength(1));
          expect(x.first.name, equals('Coffees Drank'));
        }, count: 1));
        await api.categories.insert(Category('Coffees Drank'));
      });
    });

    group('entry service', () {
      Category item;
      DateTime dateTime = DateTime(2020, 1, 1, 30, 45);

      setUp(() async {
        item = await api.categories.insert(Category('Lines of code committed'));
      });

      test('insert', () async {
        var entry = await api.entries.insert(item.id, Entry(1, dateTime));

        expect(entry.value, 1);
        expect(entry.time, dateTime);
      });

      test('delete', () async {
        await api.entries.insert(item.id, Entry(1, dateTime));
        var entry2 = await api.entries.insert(item.id, Entry(2, dateTime));

        await api.entries.delete(item.id, entry2.id);

        var entries = await api.entries.list(item.id);
        expect(entries, hasLength(1));
      });

      test('update', () async {
        var entry = await api.entries.insert(item.id, Entry(1, dateTime));
        var updated =
            await api.entries.update(item.id, entry.id, Entry(2, dateTime));
        expect(updated.value, 2);
      });

      test('subscribe', () async {
        var stream = api.entries.stream(item.id);

        stream.listen(expectAsync1((x) {
          expect(x, hasLength(1));
          expect(x.first.value, equals(1));
        }, count: 1));

        api.entries.insert(item.id, Entry(1, dateTime));
      });
    });
  });
}
