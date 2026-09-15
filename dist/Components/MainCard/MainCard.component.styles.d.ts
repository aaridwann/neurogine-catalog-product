declare const styles: Readonly<{
    cardContainer: {
        width: number;
        height: number;
        borderRadius: number;
        alignSelf: "center";
        shadowColor: string;
        shadowOffset: {
            width: number;
            height: number;
        };
        shadowOpacity: number;
        shadowRadius: number;
        elevation: number;
        backgroundColor: string;
    };
    imageBackground: {
        width: string;
        height: string;
        justifyContent: "space-between";
    };
    imageStyle: {
        borderRadius: number;
    };
    gradientOverlay: {
        flex: number;
        borderRadius: number;
        padding: number;
        justifyContent: "space-between";
    };
    tagContainer: {
        alignSelf: "flex-start";
        backgroundColor: string;
        paddingHorizontal: number;
        paddingVertical: number;
        borderRadius: number;
        borderWidth: number;
        borderColor: string;
    };
    tagText: {
        color: string;
        fontSize: number;
        fontWeight: "700";
        letterSpacing: number;
    };
    contentContainer: {
        marginTop: string;
        paddingVertical: number;
    };
    titleText: {
        color: string;
        fontSize: number;
        fontWeight: "800";
        lineHeight: number;
    };
    subtitleText: {
        color: string;
        fontSize: number;
        fontWeight: "400";
        lineHeight: number;
        marginBottom: number;
    };
    ctaButton: {
        alignSelf: "flex-start";
        backgroundColor: string;
        paddingHorizontal: number;
        paddingVertical: number;
        borderRadius: number;
        marginBottom: number;
    };
    ctaButtonText: {
        color: string;
        fontSize: number;
        fontWeight: "700";
    };
    shimmerBase: {
        backgroundColor: string;
        overflow: "hidden";
    };
    gradient: {
        flex: number;
        width: string;
    };
    skeletonContainer: {
        flex: number;
        padding: number;
        justifyContent: "space-between";
        backgroundColor: string;
        borderRadius: number;
    };
    skeletonTag: {
        width: number;
        height: number;
        borderRadius: number;
    };
    skeletonBody: {
        marginTop: string;
    };
    skeletonTitleLine1: {
        width: string;
        height: number;
        borderRadius: number;
        marginBottom: number;
    };
    skeletonTitleLine2: {
        width: string;
        height: number;
        borderRadius: number;
        marginBottom: number;
    };
    skeletonSubtitle: {
        width: string;
        height: number;
        borderRadius: number;
        marginBottom: number;
    };
    skeletonButton: {
        width: number;
        height: number;
        borderRadius: number;
    };
}>;
export default styles;
//# sourceMappingURL=MainCard.component.styles.d.ts.map