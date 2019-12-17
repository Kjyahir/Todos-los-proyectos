// Copyright 2019 The Flutter team. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:collection/collection.dart';

import 'package:gallery/studies/shrine/model/product.dart';

class _TaggedHeightData {
  const _TaggedHeightData({
    @required this.index,
    @required this.height,
  });

  final int index;
  final double height;
}

List<List<int>> balancedDistribution({
  int subsetCount,
  List<double> data,
  List<double> biases,
}) {
  assert (biases.length == subsetCount);

  List<Set<_TaggedHeightData>> result = List<Set<_TaggedHeightData>>
      .generate(subsetCount, (column) => Set());

  List<double> columnHeight = List<double>
      .generate(subsetCount, (column) => (column % 2 == 0 ? 0 : 84));

  PriorityQueue<_ColumnHeightData> columnCandidates =
      PriorityQueue<_ColumnHeightData>(_compareColumnHeightData);

  columnCandidates.addAll(
      [for (int subsetIndex = 0; subsetIndex < subsetCount; ++subsetIndex)
        _ColumnHeightData(
          height: columnHeight[subsetIndex],
          columnIndex: subsetIndex,
        )]
  );

  for (int index = 0; index < data.length; ++index) {
    // Form data.
    final object = _TaggedHeightData(index: index, height: data[index]);

    // Select column.
    final targetColumnData = columnCandidates.removeFirst();
    final targetColumn = targetColumnData.columnIndex;

    // Add to column.
    result[targetColumn].add(object);

    // Update column height.
    columnHeight[targetColumn] += object.height + 84 * 2;

    // Update columnCandidates.
    columnCandidates.add(
      _ColumnHeightData(
        height: columnHeight[targetColumn],
        columnIndex: targetColumn,
      ),
    );
  }

  // Fundamental finished.





}

List<List<Product>> balancedLayout({
  int columnCount,
  List<Product> products,
  double largeImageWidth,
  double smallImageWidth,
}) {
  final List<Size> productSizes = [
    for (var product in products)
      _imageSize(
        Image.asset(
          product.assetName,
          package: product.assetPackage,
        ),
      ),
  ];

  List<List<Product>> result = List<List<Product>>
      .generate(columnCount, (column) => []);

  List<double> columnHeight = List<double>
      .generate(columnCount, (column) => (column % 2 == 0 ? 0 : 84));

  List<bool> lastElementIsLarge = List<bool>
      .generate(columnCount, (column) => (column % 2 == 1));

  PriorityQueue<_ColumnHeightData> columnCandidates =
      PriorityQueue<_ColumnHeightData>(_compareColumnHeightData);

  columnCandidates.addAll(
    [for (int columnIndex = 0; columnIndex < columnCount; ++columnIndex)
      _ColumnHeightData(
        height: columnHeight[columnIndex],
        columnIndex: columnIndex,
      )]
  );

  for (int productIndex = 0; productIndex < products.length; ++productIndex) {
    final product = products[productIndex];
    final productSize = productSizes[productIndex];

    // Select column.
    final targetColumnData = columnCandidates.removeFirst();
    final targetColumn = targetColumnData.columnIndex;

    // Add to column.
    result[targetColumn].add(product);

    // Update column height.
    final imageHeight = productSize.height / productSize.width *
        (lastElementIsLarge[targetColumn] ? largeImageWidth : smallImageWidth);

    columnHeight[targetColumn] += imageHeight + 84 * 2;

    // Update column.
    lastElementIsLarge[targetColumn] = ! lastElementIsLarge[targetColumn];

    // Update columnCandidates.
    columnCandidates.add(
      _ColumnHeightData(
        height: columnHeight[targetColumn],
        columnIndex: targetColumn,
      ),
    );
  }

  print(standardDeviation(columnHeight));

  return result;
}

double average(List<double> data) {
  return data.fold<double>(0, (a, b) => a + b) / data.length;
}

double standardDeviation(List<double> data) {
  final double mean = average(data);
  final List<double> squareDeviations = [
    for (final elem in data)
      math.pow(elem - mean, 2).toDouble(),
  ];
  return math.sqrt(average(squareDeviations));
}

Size _imageSize(Image imageWidget) {
  Size result;

  imageWidget.image.resolve(ImageConfiguration()).addListener(
    ImageStreamListener(
      (info, synchronousCall) {
        final finalImage = info.image;
        result = Size(
          finalImage.width.toDouble(),
          finalImage.height.toDouble(),
        );
      }
    )
  );

  return result;
}

class _ColumnHeightData {
  const _ColumnHeightData({
    @required this.height,
    @required this.columnIndex,
  });

  final double height;
  final int columnIndex;
}

int _compareColumnHeightData (_ColumnHeightData a, _ColumnHeightData b) {
  if (a.height < b.height) {
    return -1;
  } else if (a.height > b.height) {
    return 1;
  } else if (a.columnIndex < b.columnIndex) {
    return -1;
  } else if (a.columnIndex > b.columnIndex) {
    return 1;
  } else {
    return 0;
  }
}

