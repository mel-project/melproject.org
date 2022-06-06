HERE=$(dirname "$0")            # relative
UTILS=$(cd "$HERE" && pwd)    # absolutized and normalized
PROJECT=$(cd "$UTILS/.." && pwd) 
FILENAME=$1

touch $UTILS/yaml-templates/$FILENAME.l10n.yaml.src
cat $UTILS/yaml-templates/$FILENAME.l10n.yaml.src | xargs -L1 -S 65538 -I % bash -c "echo % | python3 $UTILS/create_tags.py"  > $PROJECT/src/l10n/$FILENAME.l10n.yaml


#-I % python3 -c "[print(i) for i in '%'.split(':')]"