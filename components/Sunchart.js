import React, {useEffect} from "react";
import * as echarts from "echarts";

const Sunchart = () => {
  // var chartDom = document.getElementById("main");
  // var myChart = echarts.init(chartDom);
  // var option;

  const colors = ["#FFAE57", "#FF7853", "#EA5151", "#CC3F57", "#9A2555"];
  const bgColor = "#262525";
  const itemStyle = {
    star5: {
      color: colors[0],
    },
    star4: {
      color: colors[1],
    },
    star3: {
      color: colors[2],
    },
    star2: {
      color: colors[3],
    },
  };
  const data = [
    {
      name: "Econimic",
      itemStyle: {
        color: colors[1],
      },
      children: [
        {
          name: "Public",
          children: [
            {
              name: "5☆",
              children: [
                {
                  name: "Tourism",
                },
                {
                  name: "Hotel",
                },
                {
                  name: "Hospital",
                },
              ],
            },
            {
              name: "4☆",
              children: [
                {
                  name: "Airlines",
                },
                {
                  name: "Roadways",
                },
                {
                  name: "Telecom",
                },
              ],
            },
            {
              name: "3☆",
              children: [
                {
                  name: "Education",
                },
              ],
            },
          ],
        },
        {
          name: "Private",
          children: [
            {
              name: "5☆",
              children: [
                {
                  name: "Hotels",
                },
              ],
            },
            {
              name: "4☆",
              children: [
                {
                  name: "Hospitals",
                },
                {
                  name: "Telecom",
                },
              ],
            },
            {
              name: "3☆",
              children: [
                {
                  name: "Food",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "FDI",
      itemStyle: {
        color: colors[2],
      },
      children: [
        {
          name: "Stocks",
          children: [
            {
              name: "5☆",
              children: [
                {
                  name: "Relience",
                },
              ],
            },
            {
              name: "4☆",
              children: [
                {
                  name: "Sigma",
                },
                {
                  name: "Tata steel",
                },
              ],
            },
            {
              name: "3☆",
              children: [
                {
                  name: "Zara",
                },
              ],
            },
          ],
        },
        {
          name: "In-Flows",
          children: [
            {
              name: "5☆",
              children: [
                {
                  name: "Apple",
                },
              ],
            },
            {
              name: "4☆",
              children: [
                {
                  name: "Microsoft",
                },
                {
                  name: "Barclys",
                },
                {
                  name: "Meta",
                },
              ],
            },
            {
              name: "3☆",
              children: [
                {
                  name: "TSC",
                },
              ],
            },
          ],
        },
        {
          name: "Income-resc",
          children: [
            {
              name: "5☆",
              children: [
                {
                  name: "Adani Power",
                },
              ],
            },
            {
              name: "4☆",
              children: [
                {
                  name: "Visa",
                },
                {
                  name: "Master Card",
                },
              ],
            },
            {
              name: "3☆",
            },
            {
              name: "2☆",
              children: [
                {
                  name: "woodland",
                },
              ],
            },
          ],
        },
        {
          name: "Industry",
          children: [
            {
              name: "4☆",
              children: [
                {
                  name: "Silk",
                },
                {
                  name: "Textile",
                },
                {
                  name: "Timber",
                },
              ],
            },
          ],
        },
        {
          name: "Direct Bills",
          children: [
            {
              name: "5☆",
              children: [
                {
                  name: "Tata moters",
                },
              ],
            },
            {
              name: "4☆",
              children: [
                {
                  name: "tesla",
                },
                {
                  name: "Rio",
                },
              ],
            },
            {
              name: "3☆",
              children: [
                {
                  name: "goldman",
                },
              ],
            },
          ],
        },
        {
          name: "Indirect Bills",
          children: [
            {
              name: "4☆",
              children: [
                {
                  name: "Tata power",
                },
              ],
            },
          ],
        },
        {
          name: "Eduction Inflow",
          children: [
            {
              name: "5☆",
              children: [
                {
                  name: "Mackensy",
                },
              ],
            },
            {
              name: "4☆",
              children: [
                {
                  name: "Akaash",
                },
              ],
            },
          ],
        },
      ],
    },
  ];
  for (let j = 0; j < data.length; ++j) {
    let level1 = data[j].children;
    for (let i = 0; i < level1.length; ++i) {
      let block = level1[i].children;
      let bookScore = [];
      let bookScoreId;
      for (let star = 0; star < block.length; ++star) {
        let style = (function (name) {
          switch (name) {
            case "5☆":
              bookScoreId = 0;
              return itemStyle.star5;
            case "4☆":
              bookScoreId = 1;
              return itemStyle.star4;
            case "3☆":
              bookScoreId = 2;
              return itemStyle.star3;
            case "2☆":
              bookScoreId = 3;
              return itemStyle.star2;
          }
        })(block[star].name);
        block[star].label = {
          color: style.color,
          downplay: {
            opacity: 0.5,
          },
        };
        if (block[star].children) {
          style = {
            opacity: 1,
            color: style.color,
          };
          block[star].children.forEach(function (book) {
            book.value = 1;
            book.itemStyle = style;
            book.label = {
              color: style.color,
            };
            let value = 1;
            if (bookScoreId === 0 || bookScoreId === 3) {
              value = 5;
            }
            if (bookScore[bookScoreId]) {
              bookScore[bookScoreId].value += value;
            } else {
              bookScore[bookScoreId] = {
                color: colors[bookScoreId],
                value: value,
              };
            }
          });
        }
      }
      level1[i].itemStyle = {
        color: data[j].itemStyle.color,
      };
    }
  }

  // option && myChart.setOption(option, true);

  // if (option && typeof option === "object") {
  //   myChart.setOption(option);
  // }
  useEffect(() => {
    const chartDom = document.getElementById("main-chart");
    console.log(chartDom);
    if (chartDom) {
      // Check if a chart instance already exists
      let myChart = echarts.getInstanceByDom(chartDom);
      if (myChart) {
        myChart.dispose(); // Dispose of the existing instance
      }
      // const myChart = echarts.init(chartDom);
      myChart = echarts.init(chartDom);
      // Set your options here
      var option = {
        backgroundColor: bgColor,
        color: colors,
        series: [
          {
            type: "sunburst",
            center: ["50%", "48%"],
            data: data,
            sort: function (a, b) {
              if (a.depth === 1) {
                return b.getValue() - a.getValue();
              } else {
                return a.dataIndex - b.dataIndex;
              }
            },
            label: {
              rotate: "radial",
              color: bgColor,
            },
            itemStyle: {
              borderColor: bgColor,
              borderWidth: 2,
            },
            levels: [
              {},
              {
                r0: 0,
                r: 40,
                label: {
                  rotate: 0,
                },
              },
              {
                r0: 40,
                r: 105,
              },
              {
                r0: 115,
                r: 140,
                itemStyle: {
                  shadowBlur: 2,
                  shadowColor: colors[2],
                  color: "transparent",
                },
                label: {
                  rotate: "tangential",
                  fontSize: 10,
                  color: colors[0],
                },
              },
              {
                r0: 140,
                r: 145,
                itemStyle: {
                  shadowBlur: 80,
                  shadowColor: colors[0],
                },
                label: {
                  position: "outside",
                  textShadowBlur: 5,
                  textShadowColor: "#333",
                },
                downplay: {
                  label: {
                    opacity: 0.5,
                  },
                },
              },
            ],
          },
        ],
      };
      myChart.setOption(option);
      return () => {
        if (myChart) {
          myChart.dispose();
        }
      };
    }
  }, []);
  return (
    <div id="main-chart" style={{width: "100vw", height: "100vh"}}>
      {/* <ReactECharts option={this.Option()} /> */}
      {/* <button onClick={chartings}>CLick me</button> */}
      {/* {option && myChart.setOption(option, true)} */}
    </div>
  );
};

export default Sunchart;
