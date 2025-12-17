# Señalética

Una de los medios más importantes de comunicación es la señalización que permite la orientación en el espacio de las personas usuarias del servicio, también conocido como _señalética_.

![Ejemplo de señalización vertical](/escenarios/train_station_1.jpg)

La lógica de implementación está basada en el **modelo del servicio**, en el cual los pasajeros ocupan ciertos espacios antes, durante y después de su viaje. Estos espacios deben tener apropiada señalización para la orientación espacial y la información general, la cual está colocada en distintos formatos y tipos de montaje.

## Señalización impresa

```mermaid
mindmap
  root((Spaces))
    Transit Infrastructure<br/>T
      Stop<br/>TP
        Freestanding<br/>TPG
          Monolithic<br/>TPGM
          ::icon(fa fa-rectangle-list)
          Pole-mounted<br/>TPGP
          ::icon(fa fa-rectangle-list)
        Suspended<br/>TPC
        ::icon(fa fa-rectangle-list)
        Projecting<br/>TPP
        ::icon(fa fa-rectangle-list)
        Flush<br/>TPW
          Eye-level<br/>TPWE
          ::icon(fa fa-rectangle-list)
          Overhead<br/>TPWO
          ::icon(fa fa-rectangle-list)
      Station<br/>TS
        Freestanding<br/>TSG
          Monolithic<br/>TSGM
          ::icon(fa fa-rectangle-list)
          Pole-mounted<br/>TSGP
          ::icon(fa fa-rectangle-list)
        Suspended<br/>TSC
        ::icon(fa fa-rectangle-list)
        Projecting<br/>TSP
        ::icon(fa fa-rectangle-list)
        Flush<br/>TSW
          Eye-level<br/>TSWE
          ::icon(fa fa-rectangle-list)
          Overhead<br/>TSWO
          ::icon(fa fa-rectangle-list)
    Vehicles<br/>V
      Inside<br/>VI
        Flush<br/>VIF
          Eye-level<br/>VIFE
          ::icon(fa fa-rectangle-list)
          Overhead<br/>VIFO
          ::icon(fa fa-rectangle-list)
      Outside<br/>VO
        Flush<br/>VOF
          Eye-level<br/>VOFE
          ::icon(fa fa-rectangle-list)
          Overhead<br/>VOFO
          ::icon(fa fa-rectangle-list)
    Urban Spaces<br/>U
      Street<br/>US
        Freestanding<br/>USG
          Pole-mounted<br/>USGP
          ::icon(fa fa-rectangle-list)
      Park<br/>UP
        Freestanding<br/>UPG
          Monolithic<br/>UPGM
          ::icon(fa fa-rectangle-list)
```

### Imágenes de ejemplo

1. `tpc.png` (transit infrastructure / stop / suspended)
2. `tpgp.png` (transit infrastructure / stop / freestanding / pole-mounted)
3. `tpgm.png` (transit infrastructure / stop / freestanding / monolithic)
4. `tpwe.png` (transit infrastructure / stop / flush / eye-level)
5. `tpwo.png` (transit infrastructure / stop / flush / overhead)
6. `tpp.png` (transit infrastructure / stop / projecting)
7. `tsc.png` (transit infrastructure / station / suspended)
8. `tsgp.png` (transit infrastructure / station / freestanding / pole-mounted)
9. `tsgm.png` (transit infrastructure / station / freestanding / monolithic)
10. `tswe.png` (transit infrastructure / station / flush / eye-level)
11. `tswo.png` (transit infrastructure / station / flush / overhead)
12. `tsp.png` (transit infrastructure / station / projecting)
13. `vife.png` (vehicle / inside / flush / eye-level)
14. `vifo.png` (vehicle / inside / flush / overhead)
15. `vofe.png` (vehicle / outside / flush / eye-level)
16. `vofo.png` (vehicle / outside / flush / overhead)
17. `usgp.png` (urban space / street / freestanding / pole-mounted)
18. `upgm.png` (urban space / park / freestanding / monolithic)

## Señalización digital

```mermaid
mindmap
  root((Spaces))
    Transit Infrastructure<br/>T
      Stop<br/>TP
        Freestanding<br/>TPG
          Monolithic<br/>TPGM
          ::icon(fa fa-rectangle-list)
        Suspended<br/>TPC
        ::icon(fa fa-rectangle-list)
      Station<br/>TS
        Freestanding<br/>TSG
          Monolithic<br/>TSGM
          ::icon(fa fa-rectangle-list)
        Suspended<br/>TSC
        ::icon(fa fa-rectangle-list)
    Vehicles<br/>V
      Inside<br/>VI
        Flush<br/>VIF
          Overhead<br/>VIFO
          ::icon(fa fa-rectangle-list)
      Outside<br/>VO
        Flush<br/>VOF
          Eye-level<br/>VOFE
          ::icon(fa fa-rectangle-list)
          Overhead<br/>VOFO
          ::icon(fa fa-rectangle-list)

```

### Imágenes de ejemplo

1. `screen_tpc.png` (transit infrastructure / stop / suspended)
2. `screen_tpgm.png` (transit infrastructure / stop / freestanding / monolithic)
3. `screen_tsc.png` (transit infrastructure / station / suspended)
4. `screen_tsgm.png` (transit infrastructure / station / freestanding / monolithic)
5. `screen_vifo.png` (vehicle / inside / flush / overhead)
6. `screen_vofo.png` (vehicle / outside / flush / overhead)
7. `screen_vofe.png` (vehicle / outside / flush / eye-level)
