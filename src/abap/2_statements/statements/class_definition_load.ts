import {IStatement} from "./_statement";
import {str, seq, IStatementRunnable} from "../combi";
import {ClassName} from "../expressions";

export class ClassDefinitionLoad implements IStatement {

  public getMatcher(): IStatementRunnable {
    return seq(str("CLASS"), new ClassName(), str("DEFINITION LOAD"));
  }

}