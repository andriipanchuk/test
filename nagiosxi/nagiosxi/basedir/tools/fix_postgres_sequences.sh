#!/bin/bash

BASEDIR=$(dirname $(readlink -f $0))

# IMPORT ALL XI CFG VARS
php $BASEDIR/../scripts/import_xiconfig.php > $BASEDIR/config.dat
. $BASEDIR/config.dat
rm -rf $BASEDIR/config.dat
. $BASEDIR/../var/xi-sys.cfg

if [ "$cfg__db_info__nagiosxi__dbtype" == "pgsql" ]; then
    echo "Nagios XI Postgres Database Sequence Information"
    echo ""
    echo "OLD VALUES"
    echo "--------------"
    for seq in xi_commands_command_id_seq xi_events_event_id_seq xi_meta_meta_id_seq xi_options_option_id_seq xi_sysstat_sysstat_id_seq xi_usermeta_usermeta_id_seq xi_users_user_id_seq ; do
       val=`psql -U nagiosxi nagiosxi -q -t -A -c "SELECT last_value FROM $seq"`
       echo "$seq = $val"
    done
    echo ""

    # xi_options
    seq="xi_options_option_id_seq"
    goodval=99
    val=`psql -U nagiosxi nagiosxi -q -t -A -c "SELECT last_value FROM $seq"`
    if [ $val -lt $goodval ] ; then
        `psql -U nagiosxi nagiosxi -q -t -A -c "ALTER SEQUENCE $seq RESTART WITH $goodval"`
    fi

    # xi_sysstat
    seq="xi_sysstat_sysstat_id_seq"
    goodval=99
    val=`psql -U nagiosxi nagiosxi -q -t -A -c "SELECT last_value FROM $seq"`
    if [ $val -lt $goodval ] ; then
        `psql -U nagiosxi nagiosxi -q -t -A -c "ALTER SEQUENCE $seq RESTART WITH $goodval"`
    fi

    # xi_users
    seq="xi_users_user_id_seq"
    goodval=49
    val=`psql -U nagiosxi nagiosxi -q -t -A -c "SELECT last_value FROM $seq"`
    if [ $val -lt $goodval ] ; then
        `psql -U nagiosxi nagiosxi -q -t -A -c "ALTER SEQUENCE $seq RESTART WITH $goodval"`
    fi

    # xi_usermeta
    seq="xi_usermeta_usermeta_id_seq"
    goodval=399
    val=`psql -U nagiosxi nagiosxi -q -t -A -c "SELECT last_value FROM $seq"`
    if [ $val -lt $goodval ] ; then
        `psql -U nagiosxi nagiosxi -q -t -A -c "ALTER SEQUENCE $seq RESTART WITH $goodval"`
    fi

    echo "NEW VALUES"
    echo "--------------"
    for seq in xi_commands_command_id_seq xi_events_event_id_seq xi_meta_meta_id_seq xi_options_option_id_seq xi_sysstat_sysstat_id_seq xi_usermeta_usermeta_id_seq xi_users_user_id_seq ; do
       val=`psql -U nagiosxi nagiosxi -q -t -A -c "SELECT last_value FROM $seq"`
       echo "$seq = $val"
    done
    echo ""
else
    echo "Postgres Database not being used"
fi
