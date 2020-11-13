import React from "react";
import {Button, Card, Elevation, Radio, RadioGroup} from "@blueprintjs/core";

export const Exam = () => <Card interactive={true} elevation={Elevation.TWO}>
    <RadioGroup
        label="1. Как расшифровывается аббревиатура IED?"
    >
        <Radio label="Информационно электронное реле" value="one" />
        <Radio label="Интеллектуальное устройство учета" value="two" />
        <Radio label="Интеллектуальное электронное устройство" value="three" />
        <Radio label="Международный энергетический департамент" value="four" />
    </RadioGroup>

    <RadioGroup
        label="2. Какие сетевые настройки IED влияют на передачу GOOSE-сообщений?"
    >
        <Radio label="MAC –адрес и IP – адрес" value="one" />
        <Radio label="IP-адрес и VLAN" value="two" />
        <Radio label="MAC-адрес и APPID" value="three" />
        <Radio label="Все вместе" value="four" />
    </RadioGroup>

    <RadioGroup
        label="3. К какому механизму передачи данных относятся GOOSE-сообщения?"
    >
        <Radio label="Клиент-сервер" value="one" />
        <Radio label="Master-slave" value="two" />
        <Radio label="Издатель-подписчик" value="three" />
        <Radio label="Точка-точка" value="four" />
    </RadioGroup>

    <RadioGroup
        label="4. Какие первоначальные четыре октета MAC-адреса зарезервировано за ТК57 МЭК?"
    >
        <Radio label="01:0D:BB:01" value="one" />
        <Radio label="00:0С:ВB:01" value="two" />
        <Radio label="01:0С:CD:04" value="three" />
        <Radio label="01:0C:CD:01" value="four" />
    </RadioGroup>

    <RadioGroup
        label="5. В каком диапазоне можно задавать VLAN для устройств, обменивающихся GOOSE сообщении?"
    >
        <Radio label="0-9999" value="one" />
        <Radio label="0-4095" value="two" />
        <Radio label="0-1000" value="three" />
        <Radio label="0-512" value="four" />
    </RadioGroup>

    <RadioGroup
        label="6. В какой главе серии стандартов МЭК 61850 описывается механизм передачи GOOSE сообщений?"
    >
        <Radio label="МЭК 61850-6" value="one" />
        <Radio label="МЭК 61850-7-4" value="two" />
        <Radio label="МЭК 61850-8-1" value="three" />
        <Radio label="МЭК 61850-9-2" value="four" />
    </RadioGroup>

    <RadioGroup
        label="7. Можно ли задавать одинаковые MAC-адреса разным IED?"
    >
        <Radio label="Да" value="one" />
        <Radio label="Нет" value="two" />
    </RadioGroup>

    <RadioGroup
        label="8. Как расшифровывается аббревиатура GOOSE?"
    >
        <Radio label="Общее объектно-ориентированное событие на подстанции" value="one" />
        <Radio label="Быстрое сообщение релейной защиты" value="two" />
        <Radio label="Никак не расшифровывается, это название птицы" value="three" />
        <Radio label="Сообщение для передачи объема данных в энергетике" value="four" />
    </RadioGroup>

    <RadioGroup
        label="9. К какому методу передачи трафика относится GOOSE-сообщения?"
    >
        <Radio label="Unicast" value="one" />
        <Radio label="Broadcast" value="two" />
        <Radio label="Multicast" value="three" />
    </RadioGroup>

    <RadioGroup
        label="10. По какому интерфейсу передаются GOOSE – сообщения?"
    >
        <Radio label="RS-485" value="one" />
        <Radio label="RS-422" value="two" />
        <Radio label="Ethernet" value="three" />
        <Radio label="RS-232" value="four" />
    </RadioGroup>

    <RadioGroup
        label="11. Какое минимальное время между дублирующими GOOSE-сообщениями типа 1А может быть установлено согласно «Корпоративному профилю МЭК 61850»?"
    >
        <Radio label="4 мс" value="one" />
        <Radio label="10 мс" value="two" />
        <Radio label="1 мс" value="three" />
        <Radio label="1 мкс" value="four" />
    </RadioGroup>

    <RadioGroup
        label="12. На каком уровне модели OSI передаются GOOSE – сообщения?"
    >
        <Radio label="Канальный" value="one" />
        <Radio label="Транспортный" value="two" />
        <Radio label="Прикладной" value="three" />
        <Radio label="Сетевой" value="four" />
    </RadioGroup>

    <RadioGroup
        label="13. Как обозначается устройство на цифровой подстанции передающее/принимающее информации и имеющее хотя бы один процессор?"
    >
        <Radio label="IED" value="one" />
        <Radio label="LED" value="two" />
        <Radio label="VMA" value="three" />
        <Radio label="STP" value="four" />
    </RadioGroup>

    <RadioGroup
        label="14. На каком уровне передается информация посредством GOOSE – сообщений?"
    >
        <Radio label="Кольцевой" value="one" />
        <Radio label="Горизонтальный" value="two" />
        <Radio label="Вертикальный" value="three" />
        <Radio label="Сквозной" value="four" />
    </RadioGroup>

    <RadioGroup
        label="15. По какому механизму передачи данных работают GOOSE-сообщения?"
    >
        <Radio label="TPAA" value="one" />
        <Radio label="MCAA" value="two" />
        <Radio label="P2P" value="three" />
        <Radio label="По всем перечисленным" value="four" />
    </RadioGroup>

</Card>



