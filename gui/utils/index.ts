export const apiGet = async (endpoint: string, data: any) =>{
    const runtimeConfig = useRuntimeConfig();
    const apiBase = runtimeConfig.public.apiBase;
    
    endpoint = apiBase + endpoint;

    // await new Promise(r => setTimeout(r, 5000));

    // let result = await useFetch(endpoint, {mode: 'no-cors'});
    let result = {
        "wifi_mode":	"APStation",
        "ap_ch":	"6",
        "sta_status":	"Connected",
        "sta_ip":	"10.40.255.104",
        "ble_status":	"disable",
        "can_datarate":	"500K",
        "can_mode":	"normal",
        "port_type":	"tcp",
        "port":	"3333",
        "fw_version":	"v3..2",
        "hw_version":	"et.a-_obd",
        "protocol":	"auto_pid",
        "sleep_status":	"enable",
        "sleep_volt":	"13.1",
        "batt_alert":	"disable",
        "batt_alert_ssid":	"MeatPi",
        "batt_alert_pass":	"TomatoSauce",
        "batt_alert_volt":	"11.0",
        "batt_alert_protocol":	"mqtt",
        "batt_alert_url":	"mqtt://mqtt.eclipseprojects.io",
        "batt_alert_port":	"1883",
        "batt_alert_topic":	"CAR1/voltage",
        "batt_alert_time":	"1",
        "batt_mqtt_user":	"meatpi",
        "batt_mqtt_pass":	"meatpi",
        "batt_voltage":	"14.5V",
        "mqtt_en":	"disable",
        "mqtt_url":	"mqtt://10.52.52.7",
        "mqtt_port":	"1883",
        "mqtt_user":	"gavinwican",
        "mqtt_pass":	"gavinwican",
        "mqtt_tx_topic":	"wican/48ca4330c0e5/can/tx",
        "mqtt_rx_topic":	"wican/48ca4330c0e5/can/rx",
        "mqtt_status_topic":	"wican/48ca4330c0e5/can/status"
    };

    return result;
}

export const prettyName = (name) => {
    name = name.split('_');

    for(let i = 0; i < name.length; i++){
        name[i] = name[i][0].toUpperCase() + name[i].substr(1)
    }
    
    name = name.join(' ');
    return name;
}