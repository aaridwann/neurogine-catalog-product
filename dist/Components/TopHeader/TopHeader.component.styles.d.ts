declare const styles: Readonly<{
    actionSection: {
        alignItems: "center";
        justifyContent: "center";
    };
    contentWrapper: {
        alignItems: "center";
        flexDirection: "row";
        height: number;
        justifyContent: "space-between";
        paddingHorizontal: number;
        position: "relative";
    };
    userSection: {
        justifyContent: "center";
    };
    backdrop: {
        bottom: number;
        left: number;
        position: "absolute";
        right: number;
        top: number;
        zIndex: number;
    };
    closeButton: {
        padding: number;
    };
    greetingRow: {
        alignItems: "center";
        flexDirection: "row";
        justifyContent: "center";
        marginBottom: number;
    };
    headerContainer: {
        backgroundColor: string;
        zIndex: number;
    };
    searchContainer: {
        alignItems: "center";
        backgroundColor: string;
        flexDirection: "row";
        gap: number;
        paddingHorizontal: number;
        zIndex: number;
    };
    searchInput: {
        flex: number;
        marginBottom: number;
    };
}>;
export default styles;
//# sourceMappingURL=TopHeader.component.styles.d.ts.map