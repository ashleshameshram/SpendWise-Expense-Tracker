import React from 'react'
import SavingInsight from './SavingInsight.jsx'

export default function SavingDashboard({ savings, goals }) {

    // totalsaved
    const totalSaved = savings.reduce((total, saving) => (
        total + Number(saving.amount)
    ), 0);

    // this month saved
    const currentDate = new Date();

    const thisMonthSaving = savings.filter((saving) => {
        const savingDate = new Date(saving.date);

        return (
            savingDate.getMonth() === currentDate.getMonth() &&
            savingDate.getFullYear() === currentDate.getFullYear()
        );
    }).reduce(
        (total, saving) => total + Number(saving.amount),
        0
    );

    // growth
    const lastMonthSaving = savings.filter((saving) => {
        const savingDate = new Date(saving.date);

        return (
            savingDate.getMonth() === currentDate.getMonth() - 1 &&
            savingDate.getFullYear() === currentDate.getFullYear()
        );
    }).reduce(
        (total, saving) => total + Number(saving.amount),
        0
    );

    const growth = lastMonthSaving > 0
        ? Math.round(
            ((thisMonthSaving - lastMonthSaving) / lastMonthSaving) * 100
        )
        : 0;


    return (
        <div className='row mt-4 align-items-start'>

            {/* Left Dashboard Cards */}
            <div className='col-7 d-flex align-items-start'>
                {/* Total Saved */}
                <div
                    className='ms-4 shadow-lg rounded-4 p-4'
                    style={{
                        width: "200px",
                        backgroundColor: "#ffe9e9"
                    }}
                >
                    <div
                        className="rounded-circle d-flex justify-content-center align-items-center"
                        style={{
                            width: "48px",
                            height: "48px",
                            minWidth: "48px",
                            backgroundColor: "#b6ffc7"
                        }}
                    >
                        <i className="bi bi-calendar2-check-fill"></i>
                    </div>

                    <div className='mt-2'>
                        <p className='lh-1 fw-semibold'>
                            Total Saved
                        </p>

                        <h3 className='lh-1 fw-semibold'>
                            ₹{Number(totalSaved).toLocaleString("en-IN")}
                        </h3>

                        <p className='lh-1 text-info-emphasis'>
                            All time
                        </p>
                    </div>
                </div>


                {/* This Month */}
                <div
                    className='ms-4 shadow-lg rounded-4 p-4'
                    style={{
                        width: "200px",
                        backgroundColor: "#fdefe5"
                    }}
                >
                    <div
                        className="rounded-circle d-flex justify-content-center align-items-center"
                        style={{
                            width: "48px",
                            height: "48px",
                            minWidth: "48px",
                            backgroundColor: "#b6d3ff"
                        }}
                    >
                        <i className="bi bi-calendar-fill"></i>
                    </div>

                    <div className='mt-2'>
                        <p className='lh-1 fw-semibold'>
                            This Month
                        </p>

                        <h3 className='lh-1 fw-semibold'>
                            ₹{thisMonthSaving.toLocaleString("en-IN")}
                        </h3>

                        <p className='lh-1 text-primary'>
                            Monthly savings
                        </p>
                    </div>
                </div>


                {/* Growth */}
                <div
                    className='ms-4 shadow-lg rounded-4 p-4'
                    style={{
                        width: "200px",
                        backgroundColor: "#dcfddd"
                    }}
                >
                    <div
                        className="rounded-circle d-flex justify-content-center align-items-center"
                        style={{
                            width: "48px",
                            height: "48px",
                            minWidth: "48px",
                            backgroundColor: "#ffb6e3"
                        }}
                    >
                        <i className="fa-solid fa-arrow-trend-up"></i>
                    </div>

                    <div className='mt-2'>
                        <p className='lh-1 fw-semibold'>
                            Growth
                        </p>

                        <h3 className='lh-1 fw-semibold'>
                            {growth > 0 ? "+" : ""}
                            {growth}%
                        </h3>

                        <p className='lh-1 text-success'>
                            vs last month
                        </p>
                    </div>
                </div>

            </div>


            {/* Quick Insights */}
            <div className='col-5'>
                <SavingInsight
                    goals={goals}
                    growth={growth}
                    savings={savings}
                    totalSaved={totalSaved}
                    thisMonthSaving={thisMonthSaving}
                />
            </div>
        </div>
    )
}