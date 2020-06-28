#!/bin/bash
# -----------------------------------------------------------------------------
# create_component.sh
#
# Description:
#    Presentational ComponentとContainer Componentのコンポーネント設計に倣って
#    pages配下に入力されたディレクトリを生成し、componentsとcontainersディレクトリを生成するスクリプト
#
# Usage:
#    $ ./create_component.sh hoge-hoge
#
# -----------------------------------------------------------------------------
cd `dirname $0`
cd ../src/pages

mkdir "$1"
touch "$1"/index.ts
echo -e "export * from './containers';"\\n > "$1"/index.ts
mkdir "$1"/components
touch "$1"/components/index.ts
mkdir "$1"/containers
touch "$1"/containers/index.ts
