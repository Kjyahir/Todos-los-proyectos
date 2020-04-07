// Copyright 2020, the Flutter project authors. Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.
import 'dart:convert';
import 'dart:io';
import 'package:path/path.dart' as path;

import 'package:grinder/grinder.dart';

main(args) => grind(args);

@Task()
void runSkia() {
  run('flutter',
      arguments:
          'run -d chrome --release --dart-define=FLUTTER_WEB_USE_SKIA=true lib/main_mock.dart'
              .split(' '));
}

@Task()
void runChrome() {
  run('flutter', arguments: 'run -d chrome'.split(' '));
}

@Task()
void runWeb() {
  run('flutter', arguments: 'run -d web'.split(' '));
}

@Task()
test() => new TestRunner().testAsync();

@DefaultTask()
@Depends(test, copyright)
build() {
  Pub.build();
}

@Task()
clean() => defaultClean();

@Task()
generate() {
  Pub.run('build_runner', arguments: ['build']);
}

const _copyright =
    '''// Copyright 2020, the Flutter project authors. Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.''';

@Task()
copyright() async {
  var files = <File>[];
  await for (var file in _filesWithoutCopyright()) {
    files.add(file);
  }

  if (files.isNotEmpty) {
    log('Found Dart files without a copyright header:');
    for (var file in files) log(file.toString());
    fail('run "grind fix-copyright" to add copyright headers');
  }
}

@Task()
fixCopyright() async {
  await for (var file in _filesWithoutCopyright()) {
    var contents = await file.readAsString();
    file.writeAsString(_copyright + '\n\n' + contents);
  }
}

Stream<File> _filesWithoutCopyright() async* {
  var set = FileSet.fromDir(Directory('.'), recurse: true);
  var dartFiles =
      set.files.where((file) => path.extension(file.path) == '.dart');

  for (var file in dartFiles) {
    var firstThreeLines = await file
        .openRead()
        .transform(utf8.decoder)
        .transform(LineSplitter())
        .take(3)
        .fold('', (previous, element) {
      if (previous == '') return element;
      return previous + '\n' + element;
    });

    if (firstThreeLines != _copyright) {
      yield file;
    }
  }
}
