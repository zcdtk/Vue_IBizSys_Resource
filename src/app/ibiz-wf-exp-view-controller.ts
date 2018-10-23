/**
 * 工作流导航视图控制器
 *
 * @class IBizWFExpViewController
 * @extends {IBizExpViewController}
 */
class IBizWFExpViewController extends IBizExpViewController {
    
    /**
     * Creates an instance of IBizWFExpViewController.
     * 创建 IBizWFExpViewController 实例
     * 
     * @param {*} [opts={}]
     * @memberof IBizWFExpViewController
     */
    constructor(opts: any = {}) {
        super(opts);
        let _this = this;
    }

    /**
     * 获取树导航部件
     * 
     * @memberof IBizTreeExpViewController
     */
    public getExpBar(): any {
        return this.getControl('expbar');
    }

    /**
     * 导航视图部件加载完成
     *
     * @param {*} [item={}]
     * @memberof IBizWFExpViewController
     */
    public onExpCtrlLoaded(item: any = {}): void {
        this.openExpChildView(item);
    }

    /**
     * 导航树选中导航变化
     *
     * @param {*} [item={}]
     * @memberof IBizWFExpViewController
     */
    public onExpCtrlSelectionChange(item: any = {}): void {
        this.openExpChildView(item);
    }
}