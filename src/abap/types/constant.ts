import * as Statements from "../statements";
import * as Expressions from "../expressions";
import {StatementNode} from "../nodes";
import {Identifier} from "./_identifier";

export class Constant extends Identifier {

  constructor(node: StatementNode, filename: string) {
    if (!(node.get() instanceof Statements.Constant
        || node.get() instanceof Statements.Type // todo, remove this
        || node.get() instanceof Statements.ConstantBegin)) {
      throw new Error("Constant, unexpected node");
    }
    const found = node.findFirstExpression(Expressions.NamespaceSimpleName);
    if (found === undefined) {
      throw new Error("Constant, unexpected node");
    }
    const token = found.getFirstToken();

    super(token, filename);
  }

}