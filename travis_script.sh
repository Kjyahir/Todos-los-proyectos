set -e

declare -a  PROJECT_NAMES=(
	"jsonexample" \
	"shrine" \
	"veggieseasons" \
)

for PROJECT_NAME in "${PROJECT_NAMES[@]}"
do
	echo "== Testing '${PROJECT_NAME}' on Flutter's $FLUTTER_VERSION channel =="
	pushd "${PROJECT_NAME}"
	../flutter/bin/flutter analyze
	../flutter/bin/flutter format -n
	../flutter/bin/flutter test
	popd
done

echo "-- Success --"
