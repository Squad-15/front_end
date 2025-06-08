"use client";
import { AssetsMenu } from "../AssetsMenu";
import { useState } from "react";
import ManageCourses from "../LinksSideBar/ManageCoursesLink";
import DashboardMainLink from "../LinksSideBar/DashboardMainLink";
import ManageContributorsLink from "../LinksSideBar/ManageContributorsLink";
import ManageLink from "../LinksSideBar/ManageManagesLink";
import ReportDatasLink from "../LinksSideBar/ReportDatasLink";
import ReportSquadDataLink from "../LinksSideBar/ReportSquadDataLink";

export const LinksMenu = () => {
     const [isDashboardOpen, setIsDashboardOpen] = useState(false);
     const [isCursosOpen, setIsCursosOpen] = useState(false);
     const [isColaboradoresOpen, setIsColaboradoresOpen] = useState(false);
     const [isGestoresOpen, setIsGestoresOpen] = useState(false);
     const [isReportOpen, setIsReportOpen] = useState(false);
     const [isReportSquadOpen, setIsReportSquadOpen] = useState(false);
     
    return(
    <nav>
        <div className="py-4 px-4">
            <ul className="space-y-2">
                <li>
                    <DashboardMainLink isDashboardOpen={isDashboardOpen} setIsDashboardOpen={setIsDashboardOpen} />
                    <ManageCourses isCursosOpen={isCursosOpen} setIsCursosOpen={setIsCursosOpen} />
                    <ManageContributorsLink isColaboradoresOpen={isColaboradoresOpen} setIsColaboradoresOpen={setIsColaboradoresOpen} />
                    <ManageLink isGestoresOpen={isGestoresOpen} setIsGestoresOpen={setIsGestoresOpen} />
                    <ReportDatasLink isReportOpen={isReportOpen} setIsReportOpen={setIsReportOpen} />
                    <ReportSquadDataLink isReportSquadOpen={isReportSquadOpen} setIsReportSquadOpen={setIsReportSquadOpen} />
                    <AssetsMenu />
                </li>
            </ul>
        </div>
    </nav>
    );
}