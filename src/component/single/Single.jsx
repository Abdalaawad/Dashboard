 import React from 'react'
import Chart from '../charts/Chart'
import List from '../list/List'
import Navbar from '../navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'


 import "./Single.css"
        const Single = () => {
          return (
       <div className='app-single'>
        <Sidebar />
        <div className='app-single-content'>
           <Navbar />
           <div className='app-single-container'>
            <div className='app-single-box-left'>
                <button className='app-single-btn'>edit</button>

                <div className='app-single-box-left-image'>
            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHkAqQMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAFBgQHAQIDAAj/xAA+EAACAQMCAwUDCgUEAgMAAAABAgMABBEFIRIxQQYTUWFxIoGhBxQjMkJTkZLB0RUzUrHhYoKy8DTCJENj/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAMEAgEF/8QAIxEAAgICAgIDAAMAAAAAAAAAAAECEQMhEjEEQRMiURQjMv/aAAwDAQACEQMRAD8AjXhLPb+tNMA+iT0FK9yDx2/rTXAPok9BSGORtitGFdTXNq4BqOtYt2zKd643MnBGxHhQAajMlwwGcVw1xsZpy6SArmuvekx56il46lORuDWBqEoHLb1ot/gcV+ki412GCYxSnHnmt07QWnD/ADKA3VnHdyd4x3rX+GwRoWkkPCK5dejqjfsZLbXbeWXCHNF7W9WVgARVXSapDZ3HDbRjzZjk0Uh7Ryx54UAKn63FnIrnN+jXxossEEVmlnQteju1Qs4PFtkeNMynIG/OmRkpCpRcT2K9w1sKzitmDkVqBeoovLQuMr3mSKJ4odq6n6Hh58W1ca0C7HFLeMwAqoxjwoTeW8XC6mMEnyo3Z5W0jDDfhFDdRB42OOlIndaHw7orvtGiEuiIFOOeKUMDxpr7UOTctwbDhwaVsVbhviR5n9g9PIJ7qBY1OxpqhH0a+lRILCCNg4Xepwqeyg8eVcXNdW5VHloAg3z4jb0pZik4rwjzpiv/AOU3pStFxC9ZsHFdVBs6aretbyAAneoa6q5rOrK00wwDsKhJbuOhrVoxsL6deNNclWPsgZqNr11cXc0FlpwLS3DcKeOOp9K2s4THDNIw+zwii3ydW63vaG+upRxG0jSNAenFz/4ikzlcqKMcKjyOmkfJ9HHCjajNxOdyErbXOysa2oFmxDpnhLH9qslo4wDnhwfhQK9lt2kaONjJIoyUjUsR64rErQ6NMp0T3GmXuQTHKu0iePgf81ZfYvtAmpwNbyNiaPBweZBpU7b2PzlO/toys8fMFcEilHs/rklhq8MwPARkEZrsP1GJpdM+ggwHM1uCDyNLcmqNPaxSxfbG/ketFtMd3iBfnVCafRI012T6h3ckMV1bvcECMHepdLPbrfTuDJHGQMjpk1prRy9lgjVbNUUCVOQ60L1bW7KNcmVM+tLVl2PhlsoZGZySu54zvUDWOzUEK4jZgR4sTU6lG6Y5praBvaG/guZCYjt5UvYFELywFsMhs1Bq/Gko6IsjbeyxVO1bcVR+8VVyx2rEd1FISqkZFRFhIY7VwkO1blq4SMK6BHuF4kYUF7gCY4WjMsgCnJoct7bLNh3A38a7xs5yaRxey4jnhNZgsgWwU29KMRS206ngYHbxqRaRxkkjf31r44nFkYm6+3cv83iBHBu3mcE/tW/ycXTLrWuoiSyJwxsEiOGY8gM9BXtUljfWdQWQZSLhGPdzqR8m0McXajU/aB76BCB44OMj8RUse3Za0+KoddKa+InF5amEEnhDTmUkepoZZwNqcdxBLc3EIyf5D8BHvFMZcCSRgU7tWwePr40vzSppt/JeGYnhySEQ4UeB8eVDe7R1R1TId/p4tITA0ksy9DI3ER76ru/02GzaSEbNJKGycb8wMVad3cR6laR3sI+hkOBsRnzqru012H1tLQgjhP1x9nI/zmuRuwnSSHnsqFv9KTgbJjIVh4EAD9KbbCFoVwar75O5pNP1q4025zw3ADxnG2QOnqP7VZqLgYqnElWiPM3ZkUt9s07yCFP6pEHxpmApf7ZLw2aSL9ZHRh7mprEDrY2LwWMS+C70A1y2wxkOMUzW15x6bHIwwSlLev3g7jBwM0iUUNv0IWsYJIB5ZoFRfVDxbjzzQirMSqJJPTG+6lBWOMMMscc6jSwixuYyXOG50rW+oXn8Qh71W4Aw5UZ12+NxLCI0bIHSoVK42X8WpUMAu43AVW3NZlin4OIJxDyNKUcV4rCReLPQHlVgdmbkXNoFuEAYc9q5jnz0bnj47Fi6W5aJvoz7qSNYsNRMjS8bIoPSrn1FbeJCcLSHrtwJ5GijXCk9BWrcZbMOKlHQnaHrM9rxRSyMSDjNN2ha60zcOdzQ2DQIZkJVcZ64qTbaZ/DACFA48g56Dr+tE8tdHYYrdMj3MUst3dXjA/8AyHyF/wBI5GhOnatJoet216QSkLlZMdYzzH6+oFEn1Iuk7bcQAAoBmK7v5EB4oo1yx8T/AN/tU8LcrZXOlGkXhbQRSyW2o204mRlJjy2Y3VwDnHjywa01hZLiNlkn9ltiiYAP4VUvZzttf9nZZbORPnVgrEpEWwYx/pPp0Pwq2YZzq9hFPZiP5vMgdZAc7H9ac7itGIyUnsDy3SWunMjHhVGYj8KqLUblm1lrp9uOQb+A6f2q19T0sosrTN9GgySaqXUGWW7ADZUYPoPPz/el4/8AQZOh17LXBl1y3MmCYCzK2OQxj9atZGBAOedUf2e1P5nq0VwULR8mC8/T8atfR9dsL9FSCYcY24GGD6U/D9dMmzfbaDgO9A+2I4tNO+MAHJ9aMBh41yvYormHglI5daeTE3T9RtX0qMd4uOHHOgOsz20rFBKMAZ510Ol26KeE4U+HKhOpWdmoyxGa4oJsOTFe/f6VgDkGoOamajBFG5MTbdaH1RFUhD2yzG0e1GWMKbb/AFaHTS6VHNwyJGGXxphu5SCQMcqrvWiDqEp868+Xix6TPQj5MvY2xzac6AqEI8qkW91aQn2MD0pLtbqGOPDtv61IF5bH7YoXjJbTB+Q32hquru2m2LUPNlYyHiwM0JWaBuTiuiyRD/7PjXX4zfsF5FegukFtGMLgVF1GBJYVKji4GyB4jBBHxqOksf3o/GpMTRtj6QeI3rP8Z/ppeSr6EjUdPW1t7iQODmVT/tIwfiDS5DG+nXUqzfUkIy3+k7k07doLfhuJ+7OUc5Pln/OPxpaQRP8AQXSHuTkZH2Dnp5fv5UiL42mVSXJJoCTKJ1e4TZWbO/Tn+lWN8lfaBi0ukyjjiAD27kcvFf1/Gki9gTHcBOEAAAr18DTP2HtSnzW7VAFknbiI5bYH6Gn8lJCeLUhz7dXUcWkPFLxgXIMYKc9xVU6da2s961tOrAg8Q9Bt+9WD291GNHtrLuwxYcav4E7DFJFqsFpPmQsXLBnYLyFKjexk2lVEe5gS1uTFbsWB+qOoorYNCt3FPIzhlYGQqd39R+tckt45G+cJ7XeDKny/6a4ShomLDrzFPSuOySbqTotrSr+K4so2EoYjYnr5Z92Kxqt1wRqYzncVWOl6pJZXAkj2U/XTOzU8nFzAksbcUbLlT4itKMpaRznFdjxFNayWCHI+rSJ2mnRbhhCQR1ruqOsYHfMoxyBoVf2wPES5JPU02GOa7FynD0Brubj3qFmpN0gTODUTNUolfZbN0pYcQPSq91f/AMuXNPxkzE3pSDq3/lSnzqdj0Apv568TELnej9rBp8kaKrEucDANLeodaauwllFdTRF0zjesyhy9m1NR9BWPsrmMOrkA+Nc7ns3JCnGZDw05ah9HGFj2wK14PnGlBm3JFc+PXYfIvwrHVO7slwsrcfhQ7TtYmFwBxJnoZM4HnTZrGjwyXSO4G/jWkXZ20Ybqv4URg67BzV9ES9vrS5jETzbhQXkCH2j1wKBXturQPFZIXuJDgE8lBxkmmy40GPupHjIMnDt60MuNNWLTzPHkOxz5hTzqKWJwltnoQyqcdIV9SjiiklETh1tsRswO2RVt9idKS10GFLmBHIwSpXPtdfiarG10lkdoLgey0yOD44bJ/EVclq5TS0WFQ0jNhegB55PltTcNU2Zzp6FLt3bRS39hJOQhZX4e6jzwIATnHPrVe6konWOBNnlcKRjl4/Crd1W1j0qyvNavG7+8MRij7zlltggA5An4VVMcfea1GnNbdASfFjuT8KZGOibJLegjEiCNkXnHhPgP3qFdp7eBzzXeByNSvYieqsB7v8VylbNxcnpG5/4p+9aFgyVO6dMfZ5+dMGgaw1uj2khyh9qPPQ9RQi/ThlXbpXAFguVPtLuK1F07MyVosgTd7ao4POol8djWdEPfaVET4ZrnfnY1QJF++POoHFUu+O5qDmtGCzlm+iO/Sk3Ujm4kPnR+O5UxH2l5eNL10kk0z90jOc/ZGaQx6AOodaevkxi4omkPQYpXl7P6rdfyrN8Hq21P/YfR7vTNNMdygWU55GtI4wtfTcSyn3Cu+nnOlAdQDXP+GTywlCQCTzqdZadJFa90zg+lFAL2pxB41bwrnGuFzRPUrUwRGNiDtkGhsbDuxvXAN1pf1gSNE0hzGvelY1B5kZ3+FH0YZ5ilzWluhqEkty0YsxHi3RG3J+0T5nIxSssFLbG45uPQKWK74IrkoShlMQ88AH9atnQYg9pE3P2aVdMtO/e3syoKW2C5/wD0bdvd0/20+abCscD8AwC23lSsMfu66Kcsv60n2InyjX3HdWtgp9mMGV/U7L+AyfeKrrQx3k91cfeM2PTkKPdsbzi1TVLjvBlJHQcT+GwoRYRx2thjjXZccxTWyUimcJr0hJ2dV39M/vXa8Ui5uI1zxTumPeN/+NCr6aGG5imaVBk75I5USNxG2uhElVhFF/V1G/8A7VwDOoqHc45DaoCNyPhRORo2ViXXn/UKDPNEspQyxjJ29oV0B57J3Ak0kx53hcp7uY+BFdL5udQ/k/hF+moLDMhdO7JUHPPiGfgKKanplzFnIB9DT49CpCpetuag8VSdSbuiwkIX1NDfnEX3qfmFMQo+qe4i+6T8orIhjHKNPyiulepI817tf6V/CvcC/wBI/Ctq9QBrwL/SPwr3CvgPwravUADdUuJrcoLez78nBPs7AZGRy8CahPqV0HYporGMY2KkMThicbY5gD30dbmKwPrN6CgAO99cArw6UcHc7E7e14L4ge41iK9llmAl0l0j4GOSm4Ychy69Pjg7UY6n0P8AesDp6CgAR/ErgN7GjyH2eIkZH4ZXnUrUrm5tY1Nta8bEuMBS2MKSp26EgD31OH1R7v0rbxoAXnvb0rtpcZfmQYWP2FY+G4Jb1xjOd6y91fgHOjR8W4CBQ2Twgg8WccOc+fLAzR4c6yOZ91AAe1llmu0jksIhEzsGJt2UgAZBydue3nmiotbf7iL8grZfre+t1+qKAOXzaD7iL8gr3zW3+4i/IK7V6gDmsESfUijXPPCismKM80T8orevUAcjbwnnDGf9grHzW3+4i/IK7V6gD//Z" alt="girl" />
                </div>
                <div className='app-single-box-left-content'>
                    <h1 className='app-single-heading'>johanson</h1>
                 <div className='app-single-box-left-address'>
                        <span className='app-single-span-first'>email:</span>
                        <span className='app-single-span-last'>johanson@gmail.com</span>
                    </div>
                    <div className='app-single-box-left-address'>
                        <span className='app-single-span-first'>phone:</span>
                        <span className='app-single-span-last'>+ 00024447</span>
                    </div>
                    <div className='app-single-box-left-address'>
                        <span className='app-single-span-first'>address:</span>
                        <span className='app-single-span-last'>New York st 201 </span>
                    </div>
                    <div className='app-single-box-left-address'>
                        <span className='app-single-span-first'>country:</span>
                        <span className='app-single-span-last'>Usa</span>
                    </div>
                </div>
            </div>
            <div className='app-single-box-chart'>
                <Chart />
            </div>
       </div>

       <div className='app-single-list'>
       <List />
       </div>
        </div>
       </div>
          )
        }
        
        export default Single
